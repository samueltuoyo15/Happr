import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from "@nestjs/jwt";
import * as argon2 from 'argon2'
import { SignupDto, SignInDto } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) {}

    async signup(dto: SignupDto) {
        const existingUser = await this.prisma.user.findFirst({ 
            where: {
                OR: [
                    { email: dto.email},
                    { username: dto.username}
                ]
            }
        })

        if(existingUser) throw new BadRequestException("Account already exists")

        const hashedPassword = await argon2.hash(dto.password)
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                username: dto.username,
                password: hashedPassword,
                auth_provider: "local",
            }
        })
        return this.signToken(user.id, dto.email)
    }

    async signin(dto: SignInDto) {
        const user = await this.prisma.user.findUnique({ where: { email: dto.email }})
        if(!user) throw new UnauthorizedException("Invalid credentials")

        const validPassword = await argon2.verify(user.password, dto.password)
        if(!validPassword) throw new UnauthorizedException("Invalid credentials")
        return this.signToken(user.id, user.email)
    }

    private signToken(user_id: string, email: string){
        const payload = { user_id, email }
        const token = this.jwt.sign(payload, { secret: process.env.JWT_SECRET, expiresIn: "1h"})
        return { access_token: token }
    }
}
