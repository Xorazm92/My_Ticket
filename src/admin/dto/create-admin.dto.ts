import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class CreateAdminDto {

    @ApiProperty(
        {
            example:"admin1",
            description:"Admini ismi"
        }
    )
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty(
        {
            example:"login",
            description:"Admin logini"
        }
    )
    login:string

    @ApiProperty(
        {
            example:"Uzbek!$t0n",
            description:"Admining passwordi (Strong pasword: Katta va kichik harfi, symbol, number)"
        }
    )
    @IsStrongPassword({minLength:6})
    hashed_password:string

    @ApiProperty(
        {
            example:"True or False",
            description:"Bu yerda Admini activ yoki activmasligi belgilanadi"
        }
    )
    is_active:boolean

    @ApiProperty(
        {
            example:"True or False",
            description:"Bu yerda Admini creator yoki creatormasligi belgilanadi"
        }
    )
    is_creator:boolean

    @ApiProperty(
        {
            example:"Hashed refresh token",
            description:"Bu yeda heshlangan refresh token saqlanadi"
        }
    )
    hashed_refresh_token: string
}
