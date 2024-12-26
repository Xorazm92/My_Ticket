import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.model";

interface HumanCategoryAttr{
    name:string,
    start_age:number,
    finish_age:number,
    gender:number
}

@Table({tableName:"human_category",timestamps:false})
export class HumanCategory extends Model<HumanCategory, HumanCategoryAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Inson turing id raqami (auto increment)"
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
            description: "Inson turini nomi"
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
            description: "Inson turini boshlangich yoshi"
        }
    )
    @Column(
    {
        type:DataType.SMALLINT,
    })
    start_age:number

    @ApiProperty(
        {
            example: 4,
            description: "Inson turini tugash yoshi"
        }
    )
    @Column(
    {
        type:DataType.SMALLINT,
    })
    finish_age:number

    @ApiProperty(
        {
            example: 5,
            description: "Inson turini jinsi"
        }
    )
    @Column(
    {
        type:DataType.SMALLINT,
    })
    gender:number

    @HasMany(()=> Event)
    events: Event[]
}