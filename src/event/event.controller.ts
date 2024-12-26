import { Controller, Get, Post, Body,Param, Delete, Put, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from '../guards/roles.guard';
import { JwtAdminGuard } from '../guards/jwt-admin.guard';

@ApiTags("Voqia")
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation(
    {
      summary: "Voqia qoshish"
    }
  )
  @Post()
  @UseInterceptors(FileInterceptor("image"))
  create(@Body() createEventDto: CreateEventDto,@UploadedFile() image: any) {
    return this.eventService.create(createEventDto,image);
  }

  @ApiOperation(
    {
      summary: "Hama voqialarni korish"
    }
  )
  @Get('all')
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation(
    {
      summary: "Sotilgan chiptadagi orindiqlarni korish"
    }
  )
  @Get('sold-seat')
  getSoldSeat() {
    return this.eventService.getSoldSeat();
  }

  @ApiOperation(
    {
      summary: "Voqiani korish id yordamida"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Voqiani ozgartirish id yordamida"
    }
  )
  @UseGuards(RolesGuard)
  @UseGuards(JwtAdminGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @ApiOperation(
    {
      summary: "Voqiani ochrish id yordamida"
    }
  )
  @UseGuards(RolesGuard)
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
