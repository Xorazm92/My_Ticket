import { ApiProperty } from "@nestjs/swagger"

export class CreateCartDto {
    @ApiProperty(
        {
            example: "id",
            description: "Kridit kartasini id raqami (auto increment)"
        }
    )
    ticketId:number

    @ApiProperty(
        {
            example: "id",
            description: "Mijozning id raqami (auto increment)"
        }
    )
    customerId:number

    @ApiProperty(
        {
            example: "Kridit kartasi yaratilgan vaqti",
            description: "Bu yerda kridit kartasi yaratilgan vaqti saqlanadi"
        }
    )
    createdAt:Date

    @ApiProperty(
        {
            example: "Kiridit kartasi ochirilgan vaqti",
            description: "Bu yerda kiridit kartasini ochirilgan vaqti saqlanadi"
        }
    )
    fineshedAt:Date

    @ApiProperty(
        {
            example: "Status id raqami",
            description: "Bu yerda statusni id raqami saqlanadi"
        }
    )
    statusId:number
}
