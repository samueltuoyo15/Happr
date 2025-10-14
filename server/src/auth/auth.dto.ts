import { IsEmail, MaxLength, IsNotEmpty, Matches, MinLength } from "class-validator"

export class SignupDto {
    @IsNotEmpty({ message: "Email is required"})
    @IsEmail({}, { message: "Please enter a valid email address"})
    email: string 

    @IsNotEmpty({ message: "Username is required"})
    @MinLength(3, { message: "Username must be at least 3 characters long"})
    @MaxLength(12, { message: "Username cannot exceed 12 characters"})
    username: string 

    @MinLength(5, { message: "password must be at least 5 characters long"})
    @IsNotEmpty({ message: "Password is required"})
    @Matches(/(?=.*[A-Z])/, { message: "Password must contain at least one uppercase letter" })
    @Matches(/(?=.*\d)/, { message: "Password must contain at least one number" })
    @Matches(/(?=.*[!@#$%^&*])/, { message: "Password must contain at least one special character" })
    password: string
}

export class SignInDto {
    @IsEmail({}, { message: "Please enter a valid email address" })
    @IsNotEmpty({ message: "Email is required" })
    email: string 

    @MinLength(5, { message: "password must be at least 5 characters long"})
    @IsNotEmpty({ message: "Password is required"})
    @Matches(/(?=.*[A-Z])/, { message: "Password must contain at least one uppercase letter" })
    @Matches(/(?=.*\d)/, { message: "Password must contain at least one number" })
    @Matches(/(?=.*[!@#$%^&*])/, { message: "Password must contain at least one special character" })
    password: string
}