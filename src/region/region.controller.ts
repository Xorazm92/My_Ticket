import { Controller, Get, Post, Body,Param, Delete, Put, UseGuards } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from '../guards/roles.guard';
import { JwtAdminGuard } from '../guards/jwt-admin.guard';

@ApiTags("Mintaqa")
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @UseGuards(RolesGuard)
  @UseGuards(JwtAdminGuard)
  @ApiOperation(
    {
      summary: "Mintaqa qoshish"
    }
  )
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation(
    {
      summary: "Mintaqalarni korish"
    }
  )
  @Get('all')
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation(
    {
      summary: "Mintaqani korish id yordamida"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Mintaqani ozgartirish id yordamida"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @ApiOperation(
    {
      summary: "Mintaqani ochrish id yordamida"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(+id);
  }
}
