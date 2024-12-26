import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Seat } from './models/seat.model';

@Injectable()
export class SeatService {
  constructor(
    @InjectModel(Seat) private SeatModule: typeof Seat
  ) {}
  create(createSeatDto: CreateSeatDto) {
    return this.SeatModule.create(createSeatDto)
  }

  findAll() {
    return this.SeatModule.findAll({include: {all:true}})
  }

  findOne(id: number) {
    return this.SeatModule.findOne({where:{id},include:{all:true}})
  }

  async update(id: number, updateSeatDto: UpdateSeatDto):Promise<Seat> {
    const seat = await this.SeatModule.findByPk(id);
  
    if (!seat) {
      throw new NotFoundException(`Seat with ID ${id} not found...`);
    }
    
    seat.update(updateSeatDto)
        
    return seat; 
  }

  async remove(id: number):Promise<void> {
    const seat = await this.SeatModule.findByPk(id);
    if (!seat) {
      throw new NotFoundException(`Seat with ID ${id} not found...`);
    }
    await seat.destroy();
  }
}
