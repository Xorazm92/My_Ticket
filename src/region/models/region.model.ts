import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Venue } from "../../venue/models/venue.model";

interface RegionCreationAttr{
    name:string,
}

@Table({tableName:"region",timestamps:false})

export class Region extends Model<Region,RegionCreationAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Mintaqa id raqami (auto increment)"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id: number

    @ApiProperty(
        {
            example: 2,
            description: "Mintaqa nomi"
        }
    )
    @Column(
    {
        type:DataType.STRING
    })
    name:string

    @HasMany(() => Venue)
    venues:Venue[];
}
