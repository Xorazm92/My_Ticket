import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript"
import { Event } from "../../event/models/event.model"
import { Seat } from "../../seat/models/seat.model"
import { TicketStatus } from "../../ticket_status/models/ticket_status.model"
import { Cart } from "../../cart/models/cart.model"

interface TicketCreationAttr{
    eventId:number,
    seatId:number,
    price:number,
    service_fee: number,
    ticket_statusId:number
    ticket_type:number
}
@Table({tableName:"ticket",timestamps:false})

export class Ticket extends Model<Ticket,TicketCreationAttr>{
    @Column(
    {
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id: number

    @ForeignKey(() => Event)
    @Column({
        type:DataType.INTEGER
    })
    eventId:number

    @BelongsTo(() => Event)
    event:Event

    @ForeignKey(() => Seat)
    @Column({
        type:DataType.INTEGER
    })
    seatId:number

    @BelongsTo(() => Seat)
    seat:Seat

    @Column(
    {
        type:DataType.INTEGER,
    })
    price:number

    
    @Column(
    {
        type:DataType.INTEGER,
    })
    service_fee: number

    @ForeignKey(() => TicketStatus)
    @Column({
        type:DataType.INTEGER
    })
    ticket_statusId:number

    @BelongsTo(()=> TicketStatus)
    ticket_status:TicketStatus

    @Column(
    {
        type:DataType.INTEGER,
    })
    ticket_type:number

    @HasOne(()=> Cart)
    card: Cart
}