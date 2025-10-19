import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '../../common/guards/auth.guard';

@ApiTags("User")
@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @ApiOperation({ summary: "Get authenticated user info", description: "Get authenticated user information"})
    @UseGuards(AuthGuard)
    @Get("me")
    async getProfile(@Req() req: any) {
        return this.userService.getUserDetails({ _id: req.user._id })
    }
}
