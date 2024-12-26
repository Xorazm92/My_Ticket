import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Mijoz")
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation(
    {
      summary: "Mijozlarni qoshish"
    }
  )
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @ApiOperation(
    {
      summary: "Barcha mijozlarni korish"
    }
  )
  @Get('all') 
  findAll() {
    return this.customerService.findAll();
  }
  
  @ApiOperation(
    {
      summary: "Mijozni korish id raqami yordamida"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Mijozni yangilash id raqami yordamida"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @ApiOperation(
    {
      summary: "Mijozni ochrish id raqami yordamida"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
