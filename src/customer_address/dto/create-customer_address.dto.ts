import { ApiProperty } from "@nestjs/swagger"

export class CreateCustomerAddressDto {
    @ApiProperty(
        {
            example: "id",
            description: "Mijoz id raqami"
        }
    )
    customerId:number

    
    @ApiProperty(
        {
            example: "Mijozning address",
            description: "Mijozning turar joy manzili"
        }
    )
    name:string

    
    @ApiProperty(
        {
            example: "Mamlakat id raqami",
            description: "Bu yerda mamlakat id raqami saqlanadi"
        }
    )
    countryId:number

    
    @ApiProperty(
        {
            example: "Mintaqa id raqami",
            description: "Bu yerda mintaqa id raqami saqlanadi"
        }
    )
    region_id:number

    @ApiProperty(
        {
            example: "Tuman id raqami",
            description: "Bu yerda tuman id raqami saqlanadi"
        }
    )
    districtId:number

    @ApiProperty(
        {
            example: "Street",
            description: "Bu yerda kocha nomi saqlanadi"
        }
    )
    street:string

    @ApiProperty(
        {
            example: "Mijozning uyi",
            description: "Bu yerda mijoz uyini nomi saqlanadi"
        }
    )
    house:string

    @ApiProperty(
        {
            example: "tekislik",
            description: "Bu yerda tekislik saqlanadi"
        }
    )
    flat: number

    @ApiProperty(
        {
            example: "Mijoz joylashuvi",
            description: "Bu yerda mijoz joylashuvi saqlanadi"
        }
    )
    location: string

    @ApiProperty(
        {
            example: "Pochta indeksi",
            description: "Bu yerda mijozning pochta indeksi saqlanadi"
        }
    )
    post_index: string

    @ApiProperty(
        {
            example: "Malimotnoma",
            description: "Bu yerda mijoz haqida toliq malimot saqlanadi"
        }
    )
    info: string
}
