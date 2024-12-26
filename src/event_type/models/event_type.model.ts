import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Event } from "../../event/models/event.model"

interface EventTypeAttr{
    name:string,
    parent_event_type_id:number
}

@Table({tableName:"event_type",timestamps:false})
export class EventType extends Model<EventType, EventTypeAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Voqiani turini id raqami (auto increment)"
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
            description: "Voqiani turini nomi"
        }
    )
    @Column(
    {
        type:DataType.STRING(100),
        allowNull: false,
        unique: true
    })
    name:string

    @ApiProperty(
        {
            example: 3,
            description: "Ota Ona voqia turini id raqami"
        }
    )
    @ForeignKey(() => EventType)
    @Column({
        type:DataType.INTEGER
    })
    parent_event_type_id:number

    @BelongsTo(()=> EventType)
    event_type:EventType

    @HasMany(()=> Event)
    events: Event[]
}