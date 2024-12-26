import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Orindiqlar")
@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation(
    {
      summary: "Orindiq qoshish"
    }
  )
  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @ApiOperation(
    {
      summary: "Orindiqlarni korish"
    }
  )
  @Get('all')
  findAll() {
    return this.seatService.findAll();
  }

  @ApiOperation(
    {
      summary: "Orindiqni korish id raqami yordamida"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Orindiqlarni ozgartirish id raqami yodamida"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }

  @ApiOperation(
    {
      summary: "Orindiqlarni ochrish id raqami yordamida "
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatService.remove(+id);
  }
}
