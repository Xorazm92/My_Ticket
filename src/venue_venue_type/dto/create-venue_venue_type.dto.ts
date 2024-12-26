import { ApiProperty } from "@nestjs/swagger"

export class CreateVenueVenueTypeDto {
    @ApiProperty(
        {
            example: "Joy id raqami",
            description: "Bu yerda joy turini id raqami saqlanadi"
        }
    )
    venueId:number

    @ApiProperty(
        {
            example: "Joy turlarni id raqami",
            description: "Bu yerda joy turini id raqami saqlanadi"
        }
    )
    venueTypeId:number
}
