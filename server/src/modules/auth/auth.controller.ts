import type { Response } from "express"
import { Controller, Post, Get, Body, Query, HttpCode, Res } from '@nestjs/common';
import { SignupDTO, SignInDTO, usernameAvailabilityDTO} from '../../dtos/auth.module.dto';
import { AuthService } from './auth.service';
import { ApiResponseDTO } from "../../dtos/api.response.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get("username-availability")
    @HttpCode(200)
    @ApiOperation({ summary: "Check username availability", description: "Verifies if a given username is already taken or available for registration.'"})
    @ApiResponse({ status: 200, description: "Username availability checked successfully", type: ApiResponseDTO })
    checkusername(@Query() dto: usernameAvailabilityDTO) {
        return this.authService.checkUsernameAvailability(dto)
    }

    @Post("register")
    @HttpCode(201)
    @ApiOperation({ summary: "Register a new user", description: "Registers a new user using email, username, and password." })
    @ApiResponse({ status: 201, description: "User registered successfully", type: ApiResponseDTO })
    signup(@Body() dto: SignupDTO) {
        return this.authService.signup(dto)
    }

    @Get("verify-email")
    @HttpCode(200)
    @ApiOperation({ summary: "Verify user email", description: "Verifies a user’s email using a token sent to their mailbox." })
    @ApiResponse({ status: 200, description: "Email verified successfully", type: ApiResponseDTO })
    verifyEmail(@Query("token") token: string) {
        return this.authService.verifyEmail(token)
    }

    @Post("signin")
    @HttpCode(200)
    @ApiOperation({ summary: "Login user", description: "Authenticates a user using their credentials and returns a JWT token." })
    @ApiResponse({ status: 200, description: "User signed in successfully", type: ApiResponseDTO })
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
