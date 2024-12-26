import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Venue } from "../../venue/models/venue.model"

interface VenuePhotoCreationAttr{
    venueId:number,
    url:string,
}
@Table({tableName:"venue_photo",timestamps:false})

export class VenuePhoto extends Model<VenuePhoto,VenuePhotoCreationAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Joyni id raqami (auto increment)"
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
            description: "Joyni id raqami"
        }
    )
    @ForeignKey(() => Venue)
    @Column({
        type:DataType.INTEGER
    })
    venueId:number

    @ApiProperty(
        {
            example: 3,
            description: "Joyni foto surati"
        }
    )
    @Column(
    {
        type:DataType.STRING
    })
    url:string

    @BelongsTo(() => Venue)
    venue:Venue
}