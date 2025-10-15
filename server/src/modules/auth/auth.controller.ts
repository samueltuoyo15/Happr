import type { Response } from "express"
import { Controller, Post, Get, Body, Query, HttpCode, Res } from '@nestjs/common';
import { SignupDTO, SignInDTO, usernameAvailabilityDTO} from '../../dtos/auth.module.dto';
import { AuthService } from './auth.service';
import { ApiResponseDTO } from "../../dtos/api.response.dto";

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

    @Get("verify-email")
    @HttpCode(200)
    verifyEmail(@Query("token") token: string) {
        return this.authService.verifyEmail(token)
    }

    @Post("signin")
    @HttpCode(200)
    async signin(@Body() dto: SignInDTO, @Res({ passthrough: true }) res: Response): Promise<ApiResponseDTO> {
        const { access_token, refresh_token } = await this.authService.signin(dto)

        res.cookie("access_token", access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 30 * 60 * 1000,
        })

        res.cookie("refresh_token", refresh_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        
        return { success: true, message: "User signedin successfully", data: []}
    }
}
