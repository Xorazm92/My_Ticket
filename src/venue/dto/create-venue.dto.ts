import { ApiProperty } from "@nestjs/swagger"

export class CreateVenueDto {
    @ApiProperty(
        {
            example: "Joy nomi",
            description: "Bu yerda joy nomi saqlanadi"
        }
    )
    name:string

    @ApiProperty(
        {
            example: "Joy manzili",
            description: "Bu yerda joy manzili saqlanadi"
        }
    )
    address:string

    @ApiProperty(
        {
            example: "Joylashuv",
            description: "Bu yerda joylashuv saqlanadi"
        }
    )
    location:string

    @ApiProperty(
        {
            example: "Joy sayti",
            description: "Bu yerda joy sayti saqlanadi"
        }
    )
    site:string

    @ApiProperty(
        {
            example: "Joy telfon raqami",
            description: "Bu yerda joy telfon raqami saqlanadi"
        }
    )
    phone:string

    @ApiProperty(
        {
            example: "Mintaqa id raqami",
            description: "Bu yerda mintaqa id raqami saqlanadi"
        }
    )
    regionId:number
}
