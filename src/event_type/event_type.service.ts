import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { EventType } from './models/event_type.model';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType) private EventTypeModel: typeof EventType
  ) {}

  create(createEventTypeDto: CreateEventTypeDto) {
    return this.EventTypeModel.create(createEventTypeDto)
  }

  findAll() {
    return this.EventTypeModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.EventTypeModel.findByPk(id)
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto):Promise<EventType> {
    const event_type = await this.EventTypeModel.findByPk(id);
  
    if (!event_type) {
      throw new NotFoundException(`Event type with ID ${id} not found...`);
    }
    
    event_type.update(updateEventTypeDto)
        
    return event_type; 
  }

  async remove(id: number):Promise<void> {
    const event_type = await this.EventTypeModel.findByPk(id);
    if (!event_type) {
      throw new NotFoundException(`Event type with ID ${id} not found...`);
    }
    await event_type.destroy();
  }
  
}
