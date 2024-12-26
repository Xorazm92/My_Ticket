import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region) private RegionModule: typeof Region
  ) {}
  create(createRegionDto: CreateRegionDto) {
    return this.RegionModule.create(createRegionDto)
  }

  findAll() {
    return this.RegionModule.findAll(
      {
        include: 
        {
           all: true 
        }
      }
    )
  }

  findOne(id: number) {
    return this.RegionModule.findOne(
      {
        where: 
        {
          id
        },
        include: 
        {
           all: true 
        }
      }
    )
  }
  
  async update(id: number, updateRegionDto: UpdateRegionDto): Promise<Region> {
      const region = await this.RegionModule.findByPk(id);
      if (!region) {
        throw new NotFoundException(`Region with ID ${id} not found...`);
      }
      await region.update(updateRegionDto);
      return region;
    }

  async remove(id: number): Promise<void> {
    const region = await this.RegionModule.findByPk(id);
    if (!region) {
      throw new NotFoundException(`region with ID ${id} not found...`);
    }
    await region.destroy();
  }
}
