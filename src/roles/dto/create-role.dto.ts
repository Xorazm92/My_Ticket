import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateRoleDto {
    @ApiProperty(
        {
            example:"ADMIN",
            description:"Bu yerda Rollar kiritiladi..."
        }
    )
    @IsString()
    @IsNotEmpty()
    value:string

    @ApiProperty(
        {
            example:"ADMIN roli ma'limotlar",
            description:"Bu yerda Roll boycha to'liq ma'lumot yoziladi"
        }
    )
    description:string
}
