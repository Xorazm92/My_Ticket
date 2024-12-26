import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private CustomerModel: typeof Customer
  ) {}
  create(createCustomerDto: CreateCustomerDto) {
    return this.CustomerModel.create(createCustomerDto)
  }

  findAll() {
    return this.CustomerModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.CustomerModel.findByPk(id)
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto):Promise<Customer> {
    const customer = await this.CustomerModel.findByPk(id);
  
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found...`);
    }
    
    customer.update(updateCustomerDto)
        
    return customer
  }

  async remove(id: number):Promise<void> {
    const customer = await this.CustomerModel.findByPk(id);
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found...`);
    }
    await customer.destroy();
  }
}
