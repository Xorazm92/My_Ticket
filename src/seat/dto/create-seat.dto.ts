import { ApiProperty } from "@nestjs/swagger"

export class CreateSeatDto {
    @ApiProperty(
        {
            example: "Sector nomi",
            description: "Bu yerda sector nomi saqlanadi"
        }
    )
    sector:number

    @ApiProperty(
        {
            example: "Qator raqami",
            description: "Bu yerda qator raqami saqlanadi"
        }
    )
    row_number:number

    @ApiProperty(
        {
            example: "Raqam",
            description: "Bu yerda raqam saqlanadi"
        }
    )
    number:number

    @ApiProperty(
        {
            example: "Joyning id raqami",
            description: "Bu yerda joyning id raqami saqlanadi"
        }
    )
    venueId:number

    @ApiProperty(
        {
            example: "Orindiq turini id raqami",
            description: "Bu yerda orindiq turini id raqami saqlanadi"
        }
    )
    seat_typeId:number
}
