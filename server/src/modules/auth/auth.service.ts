import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { JwtService } from "@nestjs/jwt";
import * as argon2 from 'argon2'
import { ApiResponseDTO } from '../../dtos/api.response.dto';
import { SignupDTO, SignInDTO, usernameAvailabilityDTO } from '../../dtos/auth.module.dto';
import { Queue } from 'bullmq'
import { InjectQueue } from '@nestjs/bullmq'
import { decode } from 'punycode';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService, 
        private jwt: JwtService,
        @InjectQueue("email-queue") private emailQueue: Queue
    ){}

    async checkUsernameAvailability(dto: usernameAvailabilityDTO): Promise<ApiResponseDTO>{
        const username = await this.prisma.findUnique({ where: { username: dto.username}})
        
        if(username) {
            throw new BadRequestException({ success: false, data: [], message: `"${dto.username}" is already taken`})
        }

        return { success: true, data: [], message: `${dto.username} is available`}
    }

    async signup(dto: SignupDTO): Promise<ApiResponseDTO>{
        const existingUser = await this.prisma.user.findFirst({ 
            where: {
                OR: [
                    { email: dto.email},
                    { username: dto.username}
                ]
            }
        })

        if(existingUser) throw new BadRequestException({ status: true, data: [], message: "Account already exists" })

        const hashedPassword = await argon2.hash(dto.password)
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                username: dto.username,
                password: hashedPassword,
                auth_provider: "local",
            }
        })

        const emailToken = this.generateMailToken(user.id, dto.username, dto.email)
        await this.emailQueue.add("send-verification", {
            type: "verification",
            data: { email: user.email, emailToken }
        })
        return { success: true, data: [], message: "Account created. Please verify your email"}
    }

    async verifyEmail(token: string): Promise<ApiResponseDTO> {
        try{
            const decoded = this.jwt.verify(token, { secret: process.env.JWT_SECRET})
            await this.prisma.user.update({
                where: { email: decoded.email },
                data: { is_verified: true }
            })

            await this.emailQueue.add("send-welcome", {
                type: "welcome",
                data: { email: decoded.email, username: decoded.username}
            })
            return { success: true, message: "Email verified successfully!", data: []}
        } catch {
            throw new BadRequestException({ success: false, data: [], message: "Invalid or expired token!"})
        }
    }
    async signin(dto: SignInDTO) {
        const user = await this.prisma.user.findUnique({ where: { email: dto.email }})
        if(!user) throw new UnauthorizedException({ success: false, data: [], message: "Invalid credentials" })

        const validPassword = await argon2.verify(user.password, dto.password)
        if(!validPassword) throw new UnauthorizedException({ success: false, data: [], message: "Invalid credentials" })
        return this.generateAccessToken (user.id, user.email)
    }

    private generateAccessToken (_id: string, email: string){
        const payload = { _id, email }
        const token = this.jwt.sign(payload, { secret: process.env.JWT_SECRET, expiresIn: "1h"})
        return { access_token: token }
    }

    private generateRefreshToken (_id: string, email: string){
        const payload = { _id, email }
        const token = this.jwt.sign(payload, { secret: process.env.JWT_SECRET, expiresIn: "7d"})
        return { refresh_token: token }
    }

    private generateMailToken (_id: string, username: string, email: string){
        const payload = { _id, email }
        const token = this.jwt.sign(payload, { secret: process.env.JWT_SECRET, expiresIn: "1d"})
        return { email_token: token }
    }
}
