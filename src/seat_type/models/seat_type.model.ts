import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.model";

interface seatTypeAttr{
    name:string,
}

@Table({tableName:"seat_type",timestamps:false})
export class SeatType extends Model<SeatType, seatTypeAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Orindiq turini id raqami (auto increment)"
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
            description: "Orindiq turini nomi"
        }
    )
    @Column(
    {
        type:DataType.STRING(100),
        allowNull: false,
        unique: true
    })
    name:string

    @HasMany(()=> Seat)
    seats: Seat[]
}