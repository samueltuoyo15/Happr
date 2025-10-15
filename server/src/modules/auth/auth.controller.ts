import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { SignupDto, SignInDto, usernameAvailabilityDto } from '../../dtos/auth.mdoule.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get("username-availability")
    checkusername(@Query() dto: usernameAvailabilityDto) {
        return this.authService.checkUsernameAvailability(dto)
    }

    @Post("register")
    signup(@Body() dto: SignupDto) {
        return this.authService.signup(dto)
    }

    @Get("signin")
    signin(@Body() dto: SignInDto) {
        return this.authService.signin(dto)
    }
}
