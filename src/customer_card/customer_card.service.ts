import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerCard } from './models/customer_card.model';

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard) private CustomerCardModel: typeof CustomerCard
  ) {}
  create(createCustomerCardDto: CreateCustomerCardDto) {
    return this.CustomerCardModel.create(createCustomerCardDto)
  }

  findAll() {
    return this.CustomerCardModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.CustomerCardModel.findByPk(id)
  }

  async update(id: number, updateCustomerCardDto: UpdateCustomerCardDto):Promise<CustomerCard> {
    const customer_card = await this.CustomerCardModel.findByPk(id);
  
    if (!customer_card) {
      throw new NotFoundException(`Customer card with ID ${id} not found...`);
    }
    
    customer_card.update(updateCustomerCardDto)
        
    return customer_card
  }

  async remove(id: number):Promise<void> {
    const customer_card = await this.CustomerCardModel.findByPk(id);
    if (!customer_card) {
      throw new NotFoundException(`Customer card with ID ${id} not found...`);
    }
    await customer_card.destroy();
  }
}
