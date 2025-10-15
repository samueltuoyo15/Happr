import { Controller, Post, Get, Body, Param, Query, HttpCode } from '@nestjs/common';
import { SignupDTO, SignInDTO, usernameAvailabilityDTO} from '../../dtos/auth.module.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get("username-availability")
    @HttpCode(200)
    checkusername(@Query() dto: usernameAvailabilityDTO) {
        return this.authService.checkUsernameAvailability(dto)
    }

    @Post("register")
    @HttpCode(201)
    signup(@Body() dto: SignupDTO) {
        return this.authService.signup(dto)
    }

    @Post("signin")
    @HttpCode(200)
    signin(@Body() dto: SignInDTO) {
        return this.authService.signin(dto)
    }
}
