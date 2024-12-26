import { Module } from '@nestjs/common';
import { TicketStatusService } from './ticket_status.service';
import { TicketStatusController } from './ticket_status.controller';
import { TicketStatus } from './models/ticket_status.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([TicketStatus])],
  controllers: [TicketStatusController],
  providers: [TicketStatusService],
})
export class TicketStatusModule {}
