import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags("Voqia turi")
@Controller('event-type')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @ApiOperation(
    {
      summary: "Voqia turini qoshish"
    }
  )
  @Post()
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @ApiOperation(
    {
      summary: "Voqia turlarini korish"
    }
  )
  @Get('all')
  findAll() {
    return this.eventTypeService.findAll();
  }

  @ApiOperation(
    {
      summary: "Voqia turini korish id yordamida"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Voqia turini ozgartirish id yordamida"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @ApiOperation(
    {
      summary: "Voqia turini ochrish id yordamida"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventTypeService.remove(+id);
  }
}
