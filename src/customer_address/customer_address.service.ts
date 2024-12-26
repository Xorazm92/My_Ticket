import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerAddress } from './models/customer_address.model';

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress) private CustomerAddressModel: typeof CustomerAddress
  ) {}
  create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.CustomerAddressModel.create(createCustomerAddressDto)
  }

  findAll() {
    return this.CustomerAddressModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.CustomerAddressModel.findByPk(id)
  }

  async update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto):Promise<CustomerAddress> {
    const customer_address = await this.CustomerAddressModel.findByPk(id);
  
    if (!customer_address) {
      throw new NotFoundException(`Customer address with ID ${id} not found...`);
    }
    
    customer_address.update(updateCustomerAddressDto)
        
    return customer_address
  }

  async remove(id: number):Promise<void> {
    const customer_address = await this.CustomerAddressModel.findByPk(id);
    if (!customer_address) {
      throw new NotFoundException(`Customer address with ID ${id} not found...`);
    }
    await customer_address.destroy();
  }
}
