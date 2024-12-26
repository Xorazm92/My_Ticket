import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Venue (Tadbir o'tkazish objektlari)")
@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiOperation(
    {
      summary: "Joy qoshish"
    }
  )
  @Post()
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation(
    {
      summary: "Joylarni korish"
    }
  )
  @Get('all')
  findAll() {
    return this.venueService.findAll();
  }

  @ApiOperation(
    {
      summary: "Joyni korish id yordamida"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Joyni ozgartish id yordamida"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(+id, updateVenueDto);
  }
  
  @ApiOperation(
    {
      summary: "Joyni ochrish id yordamida"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueService.remove(+id);
  }
}
