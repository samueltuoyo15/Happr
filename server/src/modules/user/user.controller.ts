import { Controller, UseInterceptors, UploadedFile, Delete, Get, Body, Patch, Param, Req, UseGuards } from '@nestjs/common';
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
    
    @ApiOperation({ summary: "Get an authenticated user info", description: "Get authenticated user information"})
    @UseGuards(AuthGuard)
    @Get("me")
    async getProfile(@Req() req: any) {
        return this.userService.getUserDetails({ _id: req.user._id })
    }

    @ApiOperation({ summary: "Partially update some specific user information", description: "Partially update a specific user information"})
    @UseGuards(AuthGuard)
    @Patch(":id")
    @UseInterceptors(FileInterceptor("avatar"))
    async updateUser(@Param("id") id: string, @Body() dto: UpdateUserDTO, @UploadedFile() file?: Express.Multer.File) {
    
    // If there's a file, push it to the queue for background upload
    if (file) {
        await this.imageQueue.add("upload-avatar", {
            userId: id,
            fileBuffer: file.buffer,
            fileName: file.originalname,
        })
    }   
        return this.userService.updateUserInfo(id, dto)
    }

    @ApiOperation({ summary: "Delete your account", description: "Delete your own account"})
    @UseGuards(AuthGuard)
    @Delete(":id")
    async deleteACcount(@Param("id") id: string, @Req() req) {
        return this.userService.deleteUserAccount(req.user._id, id)
    }
}
