import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { EventType } from "../../event_type/models/event_type.model"
import { HumanCategory } from "../../human_category/models/human_category.model"
import { Venue } from "../../venue/models/venue.model"
import { Ticket } from "../../ticket/models/ticket.model"
import { Seat } from "../../seat/models/seat.model"
interface EventCreationAttr{
    name:string,
    photo:string,
    start_date:Date,
    start_time:Date,
    finish_date:Date,
    finish_time:Date,
    info:string,
    event_typeId: number,
    human_categoryId: number,
    venueId: number,
    langId: number,
    relase_date: Date,
}

@Table({tableName:"event", timestamps:false})
export class Event extends Model<Event, EventCreationAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Voqiani id raqami (auto increment)"
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
            description: "Voqia nomi"
        }
    )
    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    name:string

    @ApiProperty(
        {
            example: 3,
            description: "Voqia rasmi"
        }
    )
    @Column({
        type:DataType.STRING
    })
    photo:string

    @ApiProperty(
        {
            example: 4,
            description: "Voqiani boshlanish sanasi"
        }
    )
    @Column({
        type:DataType.DATE,
        defaultValue: new Date()
    })
    start_date:Date

    
    @ApiProperty(
        {
            example: 5,
            description: "Voqiani boshlanish vaqti"
        }
    )
    @Column({
        type:DataType.DATE,
        defaultValue: new Date()
    })
    start_time:Date

    
    @ApiProperty(
        {
            example: 6,
            description: "Voqiani tugash sanasi"
        }
    )
    @Column({
        type:DataType.DATE,
        defaultValue: new Date()
    })
    finish_date:Date

    
    @ApiProperty(
        {
            example: 7,
            description: "Voqiani tugash vaqti"
        }
    )
    @Column({
        type:DataType.DATE,
        defaultValue: new Date()
    })
    finish_time:Date

    
    @ApiProperty(
        {
            example: 8,
            description: "Voqiani haqida malimot"
        }
    )
    @Column({
        type:DataType.STRING,
    })
    info:string

    
    @ApiProperty(
        {
            example: 9,
            description: "Voqiani turlarini id raqami (foreignKey yordamida boglangan)"
        }
    )
    @ForeignKey(() => EventType)
    @Column({
        type:DataType.INTEGER
    })
    event_typeId: number

    @BelongsTo(() => EventType)
    event_type:EventType
   
    @ApiProperty(
        {
            example: 10,
            description: "Inson turlarini id raqami"
        }
    )
    @ForeignKey(() => HumanCategory)
    @Column({
        type:DataType.INTEGER
    })
    human_categoryId: number

    @BelongsTo(() => HumanCategory)
    human_category:HumanCategory

    
    @ApiProperty(
        {
            example: 11,
            description: "Joyning id raqami"
        }
    )
    @ForeignKey(() => Venue)
    @Column({
        type:DataType.INTEGER
    })
    venueId: number

    @BelongsTo(() => Venue)
    venue:Venue

    @ApiProperty(
        {
            example: 12,
            description: "Tilning id raqami"
        }
    )
    @Column({
        type:DataType.INTEGER,
    })
    langId: number

    @ApiProperty(
        {
            example: 13,
            description: "Voqiani davom etish sanasi"
        }
    )
    @Column({
        type:DataType.DATE,
        defaultValue: new Date()
    })
    relase_date: Date

    @HasMany(()=> Ticket)
    tickets: Ticket[]

    
    @BelongsToMany(()=>Seat,()=>Ticket)
    seats:Seat[]
};