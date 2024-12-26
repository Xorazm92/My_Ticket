import { ApiProperty} from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Venue } from "../../venue/models/venue.model"
import { VenueType } from "../../venue_type/models/venue_type.model"

interface IVenueVenueTypeCreationAttr{
    venueId:number,
    venueTypeId:number
}

@Table({tableName:"venue_venue_type",timestamps:false})
export class VenueVenueType extends Model<VenueVenueType, IVenueVenueTypeCreationAttr>{
  @ApiProperty(
    {
        example: 1,
        description: "Joy id raqami"
    }
)
  @ForeignKey(()=>Venue)
  @Column({ type: DataType.INTEGER })
  venueId:number

  @ApiProperty(
    {
        example: 2,
        description: "Joy turini id raqami"
    }
)
  @ForeignKey(()=>VenueType)
  @Column({ type: DataType.INTEGER })
  venueTypeId:number

  @BelongsTo(() => Venue)
  venu: Venue

  @BelongsTo(() => VenueType)
  venu_type: VenueType
}