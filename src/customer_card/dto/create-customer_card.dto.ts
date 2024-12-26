import { ApiProperty } from "@nestjs/swagger"

export class CreateCustomerCardDto {
    @ApiProperty(
        {
            example: "id",
            description: "Mijoz id raqami"
        }
    )
    customerId:number

    @ApiProperty(
        {
            example: "Mijoz karta raqami",
            description: "Bu yerda mijoz karta raqamini nomi saqlanadi"
        }
    )
    name:string

    @ApiProperty(
        {
            example: "Mijoz telefon raqami",
            description: "Bu yerda mijoz telfon raqami saqlanadi"
        }
    )
    phone:string

    @ApiProperty(
        {
            example: "Mijoz raqami",
            description: "Bu yerda mijoz raqami saqlanadi"
        }
    )
    number:string

    @ApiProperty(
        {
            example: "Mijoz kartasini yili",
            description: "Bu yerda mijoz kartasini yili saqlanadi"
        }
    )
    year:string

    @ApiProperty(
        {
            example: "Mijoz kartasini oyi",
            description: "Bu yerda mijoz kartasini oyi saqlanadi"
        }
    )
    month:string

    @ApiProperty(
        {
            example: "Mijoz activ yoki activmasligi",
            description: "Bu yerda mijoz activ yoki activmasligi saqlanadi"
        }
    )
    is_active: boolean

    @ApiProperty(
        {
            example: "Asosiy mijoz",
            description: "Bu yerda mijoz asosiy yoki yoqligi saqlanadi"
        }
    )
    is_main: boolean
}
