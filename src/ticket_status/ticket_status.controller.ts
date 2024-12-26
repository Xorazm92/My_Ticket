import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common';
import { TicketStatusService } from './ticket_status.service';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Chipta statusi")
@Controller('ticket-status')
export class TicketStatusController {
  constructor(private readonly ticketStatusService: TicketStatusService) {}

  @ApiOperation(
    {
      summary: "Chipta statusini qoshish"
    }
  )
  @Post()
  create(@Body() createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatusService.create(createTicketStatusDto);
  }

  @ApiOperation(
    {
      summary: "Chipta statuslarini korish"
    }
  )
  @Get('all')
  findAll() {
    return this.ticketStatusService.findAll();
  }

  @ApiOperation(
    {
      summary: "Chipta statusini korish id yordamida"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketStatusService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Chipta statusini ozgartirish id yordamida"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTicketStatusDto: UpdateTicketStatusDto) {
    return this.ticketStatusService.update(+id, updateTicketStatusDto);
  }

  @ApiOperation(
    {
      summary: "Chipta statusini ochrish id yordamida"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketStatusService.remove(+id);
  }
}
