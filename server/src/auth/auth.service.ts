import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from "@nestjs/jwt";
import * as argon2 from 'argon2'
import { SignupDto } from './dtos/signup.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) {}

    async signup(dto: SignupDto) {

    }
}
