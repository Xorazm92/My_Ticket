import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VenueVenueType } from "../../venue_venue_type/models/venue_venue_type.model";

interface venueTypeAttr{
    name:string,
}

@Table({tableName:"venue_type",timestamps:false})
export class VenueType extends Model<VenueType, venueTypeAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Joy turini id raqami (auto increment)"
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
            description: "Joy turini nomi"
        }
    )
    @Column(
    {
        type:DataType.STRING(100),
        allowNull: false,
        unique: true
    })
    name:string

    @BelongsToMany(() => Venue, () => VenueVenueType)
    venues: Venue[];
}