import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private BookingModel: typeof Booking
  ) {}

  create(createBookingDto: CreateBookingDto) {
    return this.BookingModel.create(createBookingDto)
  }

  findAll() {
    return this.BookingModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.BookingModel.findByPk(id)
  }

  async update(id: number, updateBookingDto: UpdateBookingDto):Promise<Booking> {
    const booking = await this.BookingModel.findByPk(id);
  
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found...`);
    }
    
    booking.update(updateBookingDto)
        
    return booking
  }

  async remove(id: number):Promise<void> {
    const booking = await this.BookingModel.findByPk(id);
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found...`);
    }
    await booking.destroy();
  }
}
