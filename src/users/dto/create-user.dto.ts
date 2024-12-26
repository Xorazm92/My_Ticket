import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class CreateUserDto {

    @ApiProperty(
        {
            example:"user1",
            description:"Foydalanuvchining ismi"
        }
    )
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty(
        {
            example:"user1@gmail.com",
            description:"Foydalanuvchining emaili"
        }
    )
    @IsEmail()
    email:string

    @ApiProperty(
        {
            example:"Uzbek!$t0n",
            description:"Foydalanuvchining passwordi (Strong pasword: Katta va kichik harfi, symbol, number)"
        }
    )
    @IsStrongPassword({minLength:6})
    password:string

    @ApiProperty(
        {
            example:"Admin",
            description:"Foydalanuvchiga berilayotgan dastlabki rol"
        }
    )
    @IsString()
    @IsNotEmpty()
    role_value:string
}
