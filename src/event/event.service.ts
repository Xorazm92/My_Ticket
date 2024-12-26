import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './models/event.model';
import { Op } from 'sequelize';
import { FileService } from '../file/file.service';
import { Seat } from '../seat/models/seat.model';
import { Ticket } from '../ticket/models/ticket.model';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event) private EventModel: typeof Event,
    private readonly fileService: FileService
  ) {}
  async create(createEventDto: CreateEventDto,Image:any) {
    const fileNamem= await this.fileService.saveFile(Image)
    return this.EventModel.create({...createEventDto, photo:fileNamem})
  }

  findAll() {
    return this.EventModel.findAll({include:{all:true}})
  }

  async getSoldSeat(){
    const SoldSeat = await this.EventModel.findAll({
      include:[{model: Seat,required: true},
        {model:Ticket,where: {status:{[Op.eq]: "sold"}}}]
    })
    return SoldSeat
  }

  findOne(id: number) {
    return this.EventModel.findByPk(id)
  }

  async update(id: number, updateEventDto: UpdateEventDto):Promise<Event> {
    const event = await this.EventModel.findByPk(id);
  
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found...`);
    }
    
    event.update(updateEventDto)
        
    return event
  }

  async remove(id: number):Promise<void> {
    const event = await this.EventModel.findByPk(id);
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found...`);
    }
    await event.destroy();
  }
}
