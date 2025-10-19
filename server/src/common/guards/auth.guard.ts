import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const token =
      request.cookies?.access_token ||
      request.headers?.authorization?.split(" ")[1];

    if (!token) {
      throw new UnauthorizedException({
        success: false,
        data: [],
        message: "No token provided",
      });
    }

    try {
      const decoded = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });

      (request as any).user = decoded
      return true;
    } catch (error) {
      throw new UnauthorizedException({
        success: false,
        data: [],
        message: "Invalid or expired token",
      });
    }
  }
}
