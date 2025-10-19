import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetUserDetailsDTO } from '../../dtos/user.dto';
import { ApiResponseDTO } from '../../dtos/api.response.dto';

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
    ){}

    async getUserDetails(dto: GetUserDetailsDTO): Promise<ApiResponseDTO> {
        const user = await this.prisma.user.findUnique({
            where: { id: dto._id },
            select: {
            id: true,
            email: true,
            username: true,
            avatar_url: true,
            is_verified: true,
            created_at: true,
            }
        })

        if(!user) throw new NotFoundException({ success: false, data: [], message: "user does not exist"})

        return { success: true, data: user, message: "User information fetched successfully!" }
    }
}
