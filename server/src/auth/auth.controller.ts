import { Controller, Post, Get, Body } from '@nestjs/common';
import { SignupDto, SignInDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("register")
    signup(@Body() dto: SignupDto) {
        return this.authService.signup(dto)
    }

    @Get("signin")
    signin(@Body() dto: SignInDto) {
        return this.authService.signin(dto)
    }
}
