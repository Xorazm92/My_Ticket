import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Venue } from "../../venue/models/venue.model"
import { SeatType } from "../../seat_type/models/seat_type.model"
import { Ticket } from "../../ticket/models/ticket.model"
import { Event } from "../../event/models/event.model"

interface SeatAttr{
    sector:number,
    row_number:number,
    number:number,
    venueId:number,
    seat_typeId:number
}

@Table({tableName:"seat", timestamps:false})
export class Seat extends Model<Seat, SeatAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Orindiq id raqami (auto increment)"
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
            description: "Sector raqami"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    sector:number

    @ApiProperty(
        {
            example: 3,
            description: "Qator raqami"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    row_number:number

    @ApiProperty(
        {
            example: 4,
            description: "Raqam"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    number:number

    @ApiProperty(
        {
            example: 5,
            description: "Joyning id raqami"
        }
    )
    @ForeignKey(() => Venue)
    @Column({
        type:DataType.INTEGER
    })
    venueId:number

    @ApiProperty(
        {
            example: 6,
            description: "Orindiq turini id raqami (foreignKey yordamida boglangan)"
        }
    )
    @ForeignKey(() => SeatType)
    @Column({
        type:DataType.INTEGER
    })
    seat_typeId:number
    
    @BelongsTo(() => Venue)
    venue:Venue

    @BelongsTo(() => SeatType)
    seat_type:SeatType

    @HasMany(()=> Ticket)
    tickets: Ticket[]

    @BelongsToMany(()=>Event,()=>Ticket)
    events:Event[]
}