import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Ticket } from './models/ticket.model';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket) private TicketModel: typeof Ticket
  ) {}
  create(createTicketDto: CreateTicketDto) {
    return this.TicketModel.create(createTicketDto)
  }

  findAll() {
    return this.TicketModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.TicketModel.findByPk(id)
  }

  async update(id: number, updateTicketDto: UpdateTicketDto):Promise<Ticket> {
    const ticket = await this.TicketModel.findByPk(id);
  
    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found...`);
    }
    
    ticket.update(updateTicketDto)
        
    return ticket
  }

  async remove(id: number):Promise<void> {
    const ticket = await this.TicketModel.findByPk(id);
    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found...`);
    }
    await ticket.destroy();
  }
}
