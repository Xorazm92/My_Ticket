import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags("Kridit Kartasi")
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation(
    {
      summary: "Kridit kartasini qoshish"
    }
  )
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation(
    {
      summary: "Kridit kartalarini korish"
    }
  )
  @Get("all")
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation(
    {
      summary: "Kridit kartalarini korish id raqami yordamida"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Kridit kartasini ozgartirish yoki yangilash id raqami yordamida"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @ApiOperation(
    {
      summary: "Kridit kartasini ochrish id raqami yordamida"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
