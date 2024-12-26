import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart) private CartModel: typeof Cart
  ) {}
  create(createCartDto: CreateCartDto) {
    return this.CartModel.create(createCartDto)
  }

  findAll() {
    return this.CartModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.CartModel.findByPk(id)
  }

  async update(id: number, updateCartDto: UpdateCartDto):Promise<Cart> {
    const cart = await this.CartModel.findByPk(id);
  
    if (!cart) {
      throw new NotFoundException(`Cart with ID ${id} not found...`);
    }
    
    cart.update(updateCartDto)
        
    return cart
  }

  async remove(id: number):Promise<void> {
    const cart = await this.CartModel.findByPk(id);
    if (!cart) {
      throw new NotFoundException(`Cart with ID ${id} not found...`);
    }
    await cart.destroy();
  }
}
