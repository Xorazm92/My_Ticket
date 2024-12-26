import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Venue } from './models/venue.model';

@Injectable()
export class VenueService {
  constructor(
    @InjectModel(Venue) private venueModel: typeof Venue
  ) {}

  create(createVenueDto: CreateVenueDto) {
    return this.venueModel.create(createVenueDto)
  }

  findAll() {
    return this.venueModel.findAll({include: { all: true }})
  }

  findOne(id: number) {
    return this.venueModel.findByPk(id)
  }

  async update(id: number, updateVenueDto: UpdateVenueDto):Promise<Venue> {
    const venue = await this.venueModel.findByPk(id);
  
    if (!venue) {
      throw new NotFoundException(`Venue with ID ${id} not found...`);
    }
    
    venue.update(updateVenueDto)
        
    return venue; 
  }

  async remove(id: number): Promise<void> {
    const venue = await this.venueModel.findByPk(id);
    if (!venue) {
      throw new NotFoundException(`Venue with ID ${id} not found...`);
    }
    await venue.destroy();
  }
}
