import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Mijoz addressi")
@Controller('customer-address')
export class CustomerAddressController {
  constructor(private readonly customerAddressService: CustomerAddressService) {}

  @ApiOperation(
    {
      summary: "Mijozlarni addressni qoshish"
    }
  )
  @Post()
  create(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressService.create(createCustomerAddressDto);
  }

  @ApiOperation(
    {
      summary: "Hama mijozlarni addressni korish"
    }
  )
  @Get('all')
  findAll() {
    return this.customerAddressService.findAll();
  }

  @ApiOperation(
    {
      summary: "Mijozlarni addressni korish id raqami yordamida"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerAddressService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Mijozlarni addressni ozgartirish id raqami yordamida"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerAddressService.update(+id, updateCustomerAddressDto);
  }

  @ApiOperation(
    {
      summary: "Mijozlarni addressni o'chrish id raqami yordamida"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerAddressService.remove(+id);
  }
}
