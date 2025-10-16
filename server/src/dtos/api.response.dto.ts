import { ApiProperty } from "@nestjs/swagger"

export class ApiResponseDTO<T = any> {
    @ApiProperty()
    success: boolean

    @ApiProperty()
    message?: string
    
    @ApiProperty()
    data?: T
}