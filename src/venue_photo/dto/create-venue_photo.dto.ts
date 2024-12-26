import { ApiProperty } from "@nestjs/swagger"

export class CreateVenuePhotoDto {
    @ApiProperty(
        {
            example: "Joyni id raqami",
            description: "Bu yerda joyni id raqami saqlanadi"
        }
    )
    venueId:number

    @ApiProperty(
        {
            example: "Joy haqida surat",
            description: "Bu yerda joy haqida surat saqlanadi"
        }
    )
    url:string
}
