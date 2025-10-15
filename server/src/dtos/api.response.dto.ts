
export class ApiResponseDTO<T = any> {
    success: boolean
    message?: string
    data?: T
}