import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SeatType } from './models/seat_type.model';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel(SeatType) private SeatTypeModel: typeof SeatType
  ) {}

  async createSeatType(
    createSeatTypeDto: CreateSeatTypeDto
  ): Promise<SeatType> {
    const seatType = await this.SeatTypeModel.create(
      createSeatTypeDto
    );
    return seatType;
  }

  async getAllSeatType(): Promise<SeatType[]> {
    const seat_type = await this.SeatTypeModel.findAll({include: {all:true}});
    return seat_type;
  }

  async getSeatTypeById(id: number): Promise<SeatType> {
    const seatType = await this.SeatTypeModel.findByPk(id);
    if (!seatType) {
      throw new NotFoundException(`Seat type with ID ${id} not found...`);
    }
    return seatType;
  }

  async getSeatTypeByName(name: string): Promise<SeatType> {
    const seat_type = await this.SeatTypeModel.findOne({
      where: { name },
    });
    if (!seat_type) {
      throw new NotFoundException(`Seat type with name ${name} not found...`);
    }
    return seat_type;
  }

  async updateSeatType(
    id: number,
    updateSeatTypeDto: UpdateSeatTypeDto
  ): Promise<SeatType> {
    const seatType = await this.SeatTypeModel.findByPk(id);
    if (!seatType) {
      throw new NotFoundException(`Seat type with ID ${id} not found...`);
    }
    await seatType.update(updateSeatTypeDto);
    return seatType;
  }

  async deleteSeatType(id: number): Promise<void> {
    const seat_type = await this.SeatTypeModel.findByPk(id);
    if (!seat_type) {
      throw new NotFoundException(`Seat type with ID ${id} not found...`);
    }
    await seat_type.destroy();
  }
}
