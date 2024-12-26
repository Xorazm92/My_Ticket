import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { VenuePhoto } from './models/venue_photo.model';
import { InjectModel } from '@nestjs/sequelize';
import { FileService } from '../file/file.service';

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private VenuePhotoModule: typeof VenuePhoto,
    private readonly fileService: FileService
  ) {}

  async create(createVenuePhotoDto: CreateVenuePhotoDto,Image:any) {
    const fileNamem= await this.fileService.saveFile(Image)
    return this.VenuePhotoModule.create({...createVenuePhotoDto, url:fileNamem})
  }

  findAll() {
    return this.VenuePhotoModule.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.VenuePhotoModule.findOne(
      {
        where: { id },
        include: { all: true }
      }
    )
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<VenuePhoto> {
    const venuePhoto = await this.VenuePhotoModule.findByPk(id);
    if (!venuePhoto) {
      throw new NotFoundException(`Venue photo with ID ${id} not found...`);
    }
    await venuePhoto.update(updateVenuePhotoDto);
    return venuePhoto;
  }

  async remove(id: number): Promise<void> {
    const venue_photo = await this.VenuePhotoModule.findByPk(id);
    if (!venue_photo) {
      throw new NotFoundException(`Venue photo with ID ${id} not found...`);
    }
    await venue_photo.destroy();
  }
}
