import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { SignInDto } from './dto/signin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags("Admin")
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation(
    {
      summary: "Admini yaratish"
    }
  )
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation(
    {
      summary: "Admini royxatan otqazish"
    }
  )
  @Post("signup")
  async signUp(@Body() createUserDto:CreateUserDto){
    return this.adminService.signUp(createUserDto)
  }

  @ApiOperation(
    {
      summary: "Admini tizimga kiritish"
    }
  )
  @Post("signin")
  async signIn(@Body() signInDto:SignInDto){
    return this.adminService.signIn(signInDto)
  }

  @ApiOperation(
    {
      summary: "Barcha Adminlarni korish"
    }
  )
  @Get('all')
  findAll() {
    return this.adminService.findAll();
  }
  
  @ApiOperation(
    {
      summary: "Admini id orqali korish"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Admin malimotlarini ozgartirish (id orqali)"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }
 
  @ApiOperation(
    {
      summary: "Admini ochrish (id orqali)"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
