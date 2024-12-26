import { Injectable } from '@nestjs/common';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TicketStatus } from './models/ticket_status.model';

@Injectable()
export class TicketStatusService {
  constructor(
    @InjectModel(TicketStatus) private TicketStatusModel: typeof TicketStatus
  ) {}
  create(createTicketStatusDto: CreateTicketStatusDto) {
    return this.TicketStatusModel.create(createTicketStatusDto)
  }

  findAll() {
    return this.TicketStatusModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.TicketStatusModel.findByPk(id)
  }

  update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    return `This action updates a #${id} ticketStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketStatus`;
  }
}
