import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketStatusDto {
    @ApiProperty(
        {
            example: "Chipta statusini nomi",
            description: "Bu yerda chipta statusini nomi saqlanadi"
        }
    )
    name:string
}
