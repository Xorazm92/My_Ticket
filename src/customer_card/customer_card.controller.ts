import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Mijoz Kartasi")
@Controller('customer-card')
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @ApiOperation(
    {
      summary: "Mijoz kartasini qoshish"
    }
  )
  @Post()
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @ApiOperation(
    {
      summary: "Mijozlarni kartalarini korish"
    }
  )
  @Get('all')
  findAll() {
    return this.customerCardService.findAll();
  }

  @ApiOperation(
    {
      summary: "Mijoz kartasini korish id raqami yordamida"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerCardService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Mijozlarni kartasini ozgartirish id raqami yordamida"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @ApiOperation(
    {
      summary: "Mijozlarni kartasini ochrish id raqami yordamida"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerCardService.remove(+id);
  }
}
