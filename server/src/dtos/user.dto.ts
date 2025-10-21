import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsPhoneNumber, IsUrl } from "class-validator";

export class GetUserDetailsDTO {
  @ApiProperty({ description: "The ID of the authenticated user" })
  _id: string;
}

export class UpdateUserDTO {
  @ApiPropertyOptional({ description: "The username of the user" })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiPropertyOptional({ description: "Short bio or description of the user" })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiPropertyOptional({ description: "Display name of the user" })
  @IsOptional()
  @IsString()
  display_name?: string;

  @ApiPropertyOptional({ description: "Phone number of the user, Nigeria format" })
  @IsOptional()
  @IsPhoneNumber("NG")
  phone_number?: string;

  @ApiPropertyOptional({ description: "URL of the user's avatar/profile picture" })
  @IsOptional()
  @IsUrl()
  avatar_url?: string;
}
