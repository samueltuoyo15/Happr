import { ApiProperty } from '@nestjs/swagger';

export class GetUserDetailsDTO {
  @ApiProperty({ description: "The ID of the authenticated user" })
  _id: string
}
