import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Ticket } from "../../ticket/models/ticket.model"
import { Customer } from "../../customer/models/customer.model"
import { Booking } from "../../booking/models/booking.model"

interface CartCreationAttr{
    ticketId:number,
    customerId:number,
    createdAt:Date,
    fineshedAt:Date,
    statusId:number,
}

@Table({tableName:"cart", timestamps:false})
export class Cart extends Model<Cart, CartCreationAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Kiridit kartasini id raqami (auto increment)"
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
            description: "Chipta id raqami (foreignKey bilan boglangan)"
        }
    )
    @ForeignKey(() => Ticket)
    @Column({
        type:DataType.INTEGER
    })
    ticketId:number

    @BelongsTo(() => Ticket)
    ticket:Ticket

    @ApiProperty(
        {
            example: 3,
            description: "Mijoz id raqami (foreignKey bilan boglangan)"
        }
    )
    @ForeignKey(() => Customer)
    @Column({
        type:DataType.INTEGER
    })
    customerId:number

    @BelongsTo(() => Customer)
    customer:Customer

    
    @ApiProperty(
        {
            example: 4,
            description: "Kiridit kartasi yaratilgan vaqti vaqt"
        }
    )
    @Column({
        type:DataType.DATE,
        defaultValue: new Date()
    })
    createdAt:Date

    
    @ApiProperty(
        {
            example: 5,
            description: "Kiridit kartasi ochirilgan vaqt"
        }
    )
    @Column({
        type:DataType.DATE,
        defaultValue: new Date()
    })
    fineshedAt:Date

    
    @ApiProperty(
        {
            example: 6,
            description: "Statusni id raqami"
        }
    )
    @Column({
        type:DataType.INTEGER,
    })
    statusId:number

    @HasMany(()=> Booking)
    bookings: Booking[]
}