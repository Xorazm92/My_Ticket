import { ApiProperty } from "@nestjs/swagger"

export class CreateTicketDto {
    @ApiProperty(
        {
            example: "Joyning id raqami",
            description: "Bu yerda joyning id raqami saqlanadi"
        }
    )
    eventId:number

    @ApiProperty(
        {
            example: "Orindiqning id raqami",
            description: "Bu yerda orindiqni id raqami saqlanadi"
        }
    )
    seatId:number

    @ApiProperty(
        {
            example: "Chipta narxi",
            description: "Bu yerda chipta narxi saqlanadi"
        }
    )
    price:number

    @ApiProperty(
        {
            example: "Xizmat xaqi",
            description: "Bu yerda xizmat xaqi saqlanadi"
        }
    )
    service_fee: number

    @ApiProperty(
        {
            example: "Chipta statusini id raqami",
            description: "Bu yerda chipta statusini id raqami saqlanadi"
        }
    )
    ticket_statusId:number

    @ApiProperty(
        {
            example: "Chipta turi",
            description: "Bu yerda chipta turi saqlanadi"
        }
    )
    ticket_type:number
}
