import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVenueVenueTypeDto } from './dto/create-venue_venue_type.dto';
import { UpdateVenueVenueTypeDto } from './dto/update-venue_venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueVenueType } from './models/venue_venue_type.model';

@Injectable()
export class VenueVenueTypeService {
  constructor(
    @InjectModel(VenueVenueType) private VenueVenueTypeModel: typeof VenueVenueType
  ) {}
  create(createVenueVenueTypeDto: CreateVenueVenueTypeDto) {
    return this.VenueVenueTypeModel.create(createVenueVenueTypeDto)
  }

  findAll() {
    return this.VenueVenueTypeModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.VenueVenueTypeModel.findOne({where:{id},include:{all:true}})
  }

  async update(id: number, updateVenueVenueTypeDto: UpdateVenueVenueTypeDto):Promise<VenueVenueType> {
    const venu_venue_type = await this.VenueVenueTypeModel.findByPk(id);
  
    if (!venu_venue_type) {
      throw new NotFoundException(`Venue Venu type with ID ${id} not found...`);
    }
    
    venu_venue_type.update(updateVenueVenueTypeDto)
        
    return venu_venue_type; 
  }

  async remove(id: number):Promise<void> {
    const venu_venue_type = await this.VenueVenueTypeModel.findByPk(id);
    if (!venu_venue_type) {
      throw new NotFoundException(`Venue Venu type with ID ${id} not found...`);
    }
    await venu_venue_type.destroy();
  }
}
