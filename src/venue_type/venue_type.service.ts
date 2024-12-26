import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.model';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(VenueType) private VenueTypeModel: typeof VenueType
  ) {}

  async createVenueType(
    createVenueTypeDto: CreateVenueTypeDto
  ): Promise<VenueType> {
    const venueType = await this.VenueTypeModel.create(
      createVenueTypeDto
    );
    return venueType;
  }

  async getAllVenueType(): Promise<VenueType[]> {
    const venue_type = await this.VenueTypeModel.findAll({include:{all:true}});
    return venue_type;
  }

  async getVenueTypeById(id: number): Promise<VenueType> {
    const venueType = await this.VenueTypeModel.findByPk(id);
    if (!venueType) {
      throw new NotFoundException(`Venue type with ID ${id} not found...`);
    }
    return venueType;
  }

  async getVenueTypeByName(name: string): Promise<VenueType> {
    const venue_type = await this.VenueTypeModel.findOne({
      where: { name },
    });
    if (!venue_type) {
      throw new NotFoundException(`Venue type with name ${name} not found...`);
    }
    return venue_type;
  }

  async updateVenueType(
    id: number,
    updateVenueTypeDto: UpdateVenueTypeDto
  ): Promise<VenueType> {
    const venueType = await this.VenueTypeModel.findByPk(id);
    if (!venueType) {
      throw new NotFoundException(`Venue type with ID ${id} not found...`);
    }
    await venueType.update(updateVenueTypeDto);
    return venueType;
  }

  async deleteVenueType(id: number): Promise<void> {
    const venue_type = await this.VenueTypeModel.findByPk(id);
    if (!venue_type) {
      throw new NotFoundException(`Venue type with ID ${id} not found...`);
    }
    await venue_type.destroy();
  }
}
