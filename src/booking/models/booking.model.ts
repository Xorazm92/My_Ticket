import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Cart } from "../../cart/models/cart.model"

interface BookingCreationAttr{
    cartId:number,
    createdAt:Date,
    fineshedAt:Date,
    payment_method_id:number,
    delivery_method_id:number,
    discount_coupon_id:number,
    statusId:number,
}

@Table({tableName:"booking", timestamps:false})
export class Booking extends Model<Booking, BookingCreationAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Bron qilish id raqami (auto increment)"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id?: number

    @ApiProperty(
        {
            example: 2,
            description: "Karta raqami id (forgeign key yordamda boglangan)"
        }
    )
    @ForeignKey(() => Cart)
    @Column({
        type:DataType.INTEGER
    })
    cartId:number

    @BelongsTo(() => Cart)
    cart:Cart

    @ApiProperty(
        {
            example: 3,
            description: "Buyurtma qilinga vaqt"
        }
    )
    @Column({
        type:DataType.DATE,
        defaultValue: new Date()
    })
    createdAt:Date

    @ApiProperty(
        {
            example: 4,
            description: "Buyurtma tugagan vaqt"
        }
    )
    @Column({
        type:DataType.DATE,
        defaultValue: new Date()
    })
    fineshedAt:Date

    @ApiProperty(
        {
            example: 5,
            description: "Tolov turi id raqami"
        } 
    )
    @Column({
        type:DataType.INTEGER,
    })
    payment_method_id:number

    @ApiProperty(
        {
            example: 6,
            description: "Yetkazib berish usuli id raqami"
        }
    )
    @Column({
        type:DataType.INTEGER,
    })
    delivery_method_id:number

    @ApiProperty(
        {
            example: 7,
            description: "Chegirma kuponi id raqami"
        }
    )
    @Column({
        type:DataType.INTEGER,
    })
    discount_coupon_id:number

    @ApiProperty(
        {
            example: 8,
            description: "Status id raqami"
        }
    )
    @Column({
        type:DataType.INTEGER,
    })
    statusId:number
}