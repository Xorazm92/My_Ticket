import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";

interface TicketStatusAttr{
    name:string
}

@Table({tableName:"ticket_status",timestamps:false})
export class TicketStatus extends Model<TicketStatus, TicketStatusAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Chipta statusini id raqami (auto increment)"
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
            description: "Chipta statusini nomi"
        }
    )
    @Column(
    {
        type:DataType.STRING(100),
        allowNull: false,
        unique: true
    })
    name:string

    @HasMany(()=> Ticket)
    ticket:Ticket[]

}