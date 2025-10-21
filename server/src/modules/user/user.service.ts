import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetUserDetailsDTO, UpdateUserDTO } from '../../dtos/user.dto';
import { ApiResponseDTO } from '../../dtos/api.response.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUserDetails(dto: GetUserDetailsDTO): Promise<ApiResponseDTO> {
    const user = await this.prisma.user.findUnique({
      where: { id: dto._id },
      select: {
        id: true,
        email: true,
        username: true,
        bio: true,
        display_name: true,
        avatar_url: true,
        phone_number: true,
        auth_provider: true,
        is_verified: true,
        created_at: true,
        updated_at: true,
        bank_account: {
          select: {
            bank_name: true,
            account_name: true,
            account_number: true,
          },
        },
        _count: {
          select: {
            donations: true, 
            supports: true,  
          },
        },
      },
    })

    if (!user) {
      throw new NotFoundException({
        success: false,
        data: [],
        message: 'User does not exist',
      });
    }
    if(!user.is_verified) throw new ForbiddenException({ success: false, data: [], message: "You account is not verified yet, check your email"})
   
    const [totalReceived, totalGiven, uniqueSupporters] = await Promise.all([
      this.prisma.donation.aggregate({
        _sum: { amount: true },
        where: { creator_id: dto._id },
      }),

      this.prisma.donation.aggregate({
        _sum: { amount: true },
        where: { supporter_id: dto._id },
      }),

      this.prisma.donation.findMany({
        where: { creator_id: dto._id, supporter_id: { not: null } },
        select: { supporter_id: true },
        distinct: ['supporter_id'],
      }),
    ])


    const recentDonations = await this.prisma.donation.findMany({
      where: { creator_id: dto._id },
      orderBy: { created_at: 'desc' },
      take: 5,
      select: {
        id: true,
        amount: true,
        message: true,
        name: true,
        email: true,
        is_guest: true,
        created_at: true,
        supporter: {
          select: {
            id: true,
            username: true,
            avatar_url: true,
          },
        },
      },
    })

    const responseData = {
      ...user,
      stats: {
        total_donations_received: user._count.donations,
        total_donations_given: user._count.supports,
        total_amount_received: totalReceived._sum.amount || 0,
        total_amount_given: totalGiven._sum.amount || 0,
        total_supporters: uniqueSupporters.length,
      },
      recent_donations: recentDonations,
    }

    delete (responseData as any)._count;

    return { success: true, data: responseData, message: "User details and donation stats fetched successfully!", }

  }

  async updateUserInfo(id: string, dto: UpdateUserDTO): Promise<ApiResponseDTO> {
    const user = await this.prisma.user.findUnique({ where: { id} })
    if(!user) {
      throw new NotFoundException({ success: false, data: [], message: "User does not exist"})
    }
    if(!user.is_verified) throw new ForbiddenException({ success: false, data: [], message: "You account is not verified yet, check your email"})

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: { ...dto },
      select: {
        id: true,
        email: true,
        username: true,
        bio: true,
        display_name: true,
        avatar_url: true,
        phone_number: true,
        auth_provider: true,
        is_verified: true,
        created_at: true,
        updated_at: true,
      },
    })

    return { success: true, data: updatedUser, message: "User profile updated successfuly!",}
  }

  async deleteUserAccount(authUserId: string, targetUserId: string): Promise<ApiResponseDTO> {
    if(authUserId !== targetUserId) {
      throw new ForbiddenException({ success: false, data: [], message: "You are not authorized to delete this account",})
    }

    const user = await this.prisma.user.findUnique({ where: { id: targetUserId }})
    if(!user) {
      throw new NotFoundException({ success: false, data: [], message: "user does not exist"})
    }

    if(!user.is_verified) throw new ForbiddenException({ success: false, data: [], message: "You account is not verified yet, check your email"})
    
    await this.prisma.user.delete({ where: { id: targetUserId }})
    return { success: true, data: [], message: "user account deleted successfully!"}
  }
}
