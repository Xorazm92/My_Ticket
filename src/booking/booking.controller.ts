import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Bron qilish")
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation(
    {
      summary: "Bron qilish"
    }
  )
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation(
    {
      summary:"Barcha Buyurtmalarni korish"
    }
  )
  @Get("all")
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation(
    {
      summary:"Buyurtmani id raqami yordamida korish"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @ApiOperation(
    {
      summary:"Buyurtmani id raqami yordamida ozgartirish"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @ApiOperation(
    {
      summary:"Buyurtmani id raqami yordamida ochrish"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
