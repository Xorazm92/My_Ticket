import { Module } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { EventTypeController } from './event_type.controller';
import { EventType } from './models/event_type.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([EventType])],
  controllers: [EventTypeController],
  providers: [EventTypeService],
})
export class EventTypeModule {}
