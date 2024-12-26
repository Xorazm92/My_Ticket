import { Module } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CustomerAddressController } from './customer_address.controller';
import { CustomerAddress } from './models/customer_address.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([CustomerAddress])],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
})
export class CustomerAddressModule {}
