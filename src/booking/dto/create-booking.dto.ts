import { ApiProperty } from "@nestjs/swagger"

export class CreateBookingDto {
    @ApiProperty(
        {
            example: "id",
            description: "Foydalanuvchining id raqami"
        }
    )
    cartId:number

    @ApiProperty(
        {
            example: "booking yaratilgan vaqti",
            description: "Bu yerda booking yaratilgan vaqti saqlanadi"
        }
    )
    createdAt:Date

    @ApiProperty(
        {
            example: "booking tugagan vaqti",
            description: "Bu yerda booking tugagan vaqti saqlanadi"
        }
    )
    fineshedAt:Date

    @ApiProperty(
        {
            example: "Tolov turi id",
            description: "Bu yerda tolov turini id saqlanadi"
        }
    )
    payment_method_id:number

    @ApiProperty(
        {
            example: "yetkazib berish usuli id",
            description: "Bu yerda yetkazib berish usuli id saqlanadi"
        }
    )
    delivery_method_id:number

    @ApiProperty(
        {
            example: "chegirma kuponi id",
            description: "Bu yerda chegirma kuponi id saqlanadi"
        }
    )
    discount_coupon_id:number

    @ApiProperty(
        {
            example: "status id",
            description: "Bu yerda status id saqlanadi"
        }
    )
    statusId:number
}
