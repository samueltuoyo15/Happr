import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetUserDetailsDTO } from '../../dtos/user.dto';
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

    // to aggregate donation totals
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

    return {
      success: true,
      data: responseData,
      message: "User details and donation stats fetched successfully!",
    }
  }
}
