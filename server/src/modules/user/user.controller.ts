import { Controller, BadRequestException, UseInterceptors, UploadedFile, Delete, Get, Body, Patch, Param, Req, UseGuards, HttpCode, UnsupportedMediaTypeException } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '../../common/guards/auth.guard';
import { UpdateUserDTO } from '../../dtos/user.dto';
import { FileInterceptor } from "@nestjs/platform-express"
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';
import type { Express } from 'express';

@ApiTags("User")
@ApiBearerAuth()
@Controller("user")

export class UserController {
    constructor(private readonly userService: UserService, @InjectQueue("image-queue") private readonly imageQueue: Queue,) {}
    
    // get authenticated user controller
    @Get("me")
    @HttpCode(200)
    @ApiOperation({ summary: "Get an authenticated user info", description: "Get authenticated user information"})
    @UseGuards(AuthGuard)
    async getProfile(@Req() req: any) {
        return this.userService.getUserDetails({ _id: req.user._id })
    }

    // update user information controller
    @HttpCode(200)
    @Patch(":id")
    @ApiOperation({ summary: "Partially update some specific user information", description: "Partially update a specific user information and optionally upload an avatar"})
    @UseGuards(AuthGuard)
    @UseInterceptors(
     FileInterceptor("avatar", {
      limits: { fileSize: 5 * 1024 * 1024 }, 
      fileFilter: (_req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
        if (!allowedTypes.includes(file.mimetype)) {
          return cb(
            new UnsupportedMediaTypeException(
              "Invalid file type. Only JPEG, PNG, JPG, and WEBP are allowed."
            ),
            false
          );
        }
        cb(null, true);
      },
    })
    )
    async updateUser(@Param("id") id: string, @Body() dto: UpdateUserDTO, @UploadedFile() file?: Express.Multer.File) { 
    if (file) {
        await this.imageQueue.add("upload-avatar", {
            userId: id,
            fileBuffer: file.buffer,
            fileName: file.originalname,
        })
    }   
        return this.userService.updateUserInfo(id, dto)
    }

    
    // delete account controller
    @Delete(":id")
    @HttpCode(200)
    @ApiOperation({ summary: "Delete your account", description: "Delete your own account"})
    @UseGuards(AuthGuard)
    async deleteACcount(@Param("id") id: string, @Req() req) {
        return this.userService.deleteUserAccount(req.user._id, id)
    }
}
