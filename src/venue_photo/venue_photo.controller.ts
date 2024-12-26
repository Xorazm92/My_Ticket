import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';


@ApiTags("Objektlarning rasimlari")
@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  create(@Body() createVenuePhotoDto: CreateVenuePhotoDto,@UploadedFile() image: any) {
    return this.venuePhotoService.create(createVenuePhotoDto,image);
  }

  @Get('all')
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
