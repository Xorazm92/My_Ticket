import { ApiProperty } from "@nestjs/swagger"

export class CreateCustomerDto {
    @ApiProperty(
        {
            example: "id",
            description: "Chipta id raqami"
        }
    )
    ticketId:number

    @ApiProperty(
        {
            example: "Mijoz Familyasi",
            description: "Mijozning familyasi saqlanadgan joy"
        }
    )
    first_name:string

    
    @ApiProperty(
        {
            example: "Mijoz Ismi",
            description: "Mijozning ismi saqlanadgan joy"
        }
    )
    last_name:string

    
    @ApiProperty(
        {
            example: "Mijozning telifon raqami",
            description: "Mijozning  telifon raqami saqlanadgan joy"
        }
    )
    phone:string

    
    @ApiProperty(
        {
            example: "Mijozning heshlangan paroli",
            description: "Mijozning heshlangan paroli saqlanadgan joyi"
        }
    )
    hashed_password:string

    
    @ApiProperty(
        {
            example: "Mijoz Emaili",
            description: "Mijoz email saqlanadgan joy"
        }
    )
    email:string

    
    @ApiProperty(
        {
            example: "birth date",
            description: "Mijozning tugulgan sanisi"
        }
    )
    birth_date:Date

    
    @ApiProperty(
        {
            example: "Mijoz geni",
            description: "Mijozning geni mahvi tartibda sir tutladi"
        }
    )
    gender:number

    
    @ApiProperty(
        {
            example: "Mijoz tili",
            description: "Jahon tilari id"
        }
    )
    langId: number

    
    @ApiProperty(
        {
            example: "Mijoz heshlangan refresh tokeni",
            description: "Mijozning  heshlangan refresh tokeni"
        }
    )
    hashed_refresh_token: number
}
