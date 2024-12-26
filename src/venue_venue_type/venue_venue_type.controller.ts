import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { VenueVenueTypeService } from './venue_venue_type.service';
import { CreateVenueVenueTypeDto } from './dto/create-venue_venue_type.dto';
import { UpdateVenueVenueTypeDto } from './dto/update-venue_venue_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("vanue venue type")
@Controller('venue-venue-type')
export class VenueVenueTypeController {
  constructor(private readonly venueVenueTypeService: VenueVenueTypeService) {}

  @ApiOperation(
    {
      summary: "venue venue type qoshish"
    }
  )
  @Post()
  create(@Body() createVenueVenueTypeDto: CreateVenueVenueTypeDto) {
    return this.venueVenueTypeService.create(createVenueVenueTypeDto);
  }

  @ApiOperation(
    {
      summary: "venue venue typelarni korish"
    }
  )
  @Get('all')
  findAll() {
    return this.venueVenueTypeService.findAll();
  }

  
  @ApiOperation(
    {
      summary: "venue venue typni korish id yordamida"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueVenueTypeService.findOne(+id);
  }

  
  @ApiOperation(
    {
      summary: "venue venue typeni ozgartirish id yordamida"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateVenueVenueTypeDto: UpdateVenueVenueTypeDto) {
    return this.venueVenueTypeService.update(+id, updateVenueVenueTypeDto);
  }

  @ApiOperation(
    {
      summary: "venue venue typeni ochrish id yordamida"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueVenueTypeService.remove(+id);
  }
}
