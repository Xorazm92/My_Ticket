import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { VenuePhoto } from "../../venue_photo/models/venue_photo.model";
import { Region } from "../../region/models/region.model";
import { Seat } from "../../seat/models/seat.model";
import { VenueVenueType } from "../../venue_venue_type/models/venue_venue_type.model";
import { Event } from "../../event/models/event.model";
import { VenueType } from "../../venue_type/models/venue_type.model";

interface VenueAttr{
    name:string,
    address:string,
    location:string,
    site:string,
    phone:string,
    regionId: number
}

@Table({tableName:"venue", timestamps:false})
export class Venue extends Model<Venue, VenueAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Joyning id raqami (auto increment)"
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
            description: "Joyning nomi"
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
            description: "Joyning manzili"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    address:string

    @ApiProperty(
        {
            example: 4,
            description: "Joylashuv"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    location:string

    @ApiProperty(
        {
            example: 5,
            description: "Joyning telfon raqami"
        }
    )
    @Column(
    {
        type:DataType.STRING(15),
        unique: true
    })
    phone:string

    @HasMany(()=> VenuePhoto)
    venue_photos: VenuePhoto[]

    @ApiProperty(
        {
            example: 6,
            description: "Mintaqa id raqami"
        }
    )
    @ForeignKey(() => Region)
    @Column({
        type:DataType.INTEGER
    })
    regionId:number

    @BelongsTo(() => Region)
    region: Region;

    @HasMany(()=> Seat)
    seats: Seat[]

    @BelongsToMany(() => VenueType, () => VenueVenueType)
    venue_types: VenueType[];

    @HasMany(()=> Event)
    events: Event[]
}