import { Controller, Get, Post, Body,Param, Delete, Put, HttpCode, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRemoveRoleDto } from './dto/add-remove-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Users } from './models/user.model';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { SelfGuard } from '../guards/self.guard';
import { Roles } from '../decorator/roles-auth.decorator';


@ApiTags("Foydalanuvchilar rollari")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation(
    {
      summary: "Barcha foydalanuvhcilar royxati"
    }
  )
  @ApiResponse(
    {
      status:200,
      description:"List of users",
      type:[Users]
    }
  )
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @ApiResponse(
    {
      status:200,
      description:"Get user by Id",
      type:Users
    }
  )
  @UseGuards(SelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Foydalanuvchini ozgartiirish"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @ApiOperation(
    {
      summary: "Foydalanuvchini ochrish"
    }
  )
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @ApiOperation(
    {
      summary: "Foydalanuvchini rol taqdim qilish"
    }
  )
  @Post("add_role")
  async addRole(@Body() addRemoveRoleDto:AddRemoveRoleDto){
    return this.usersService.addRole(addRemoveRoleDto)
  }

  @ApiOperation(
    {
      summary: "Foydalanuvchidan rolni olib tashlash"
    }
  )
  @HttpCode(200)
  @Post("remove_role")
  async removeRole(@Body() addRemoveRoleDto:AddRemoveRoleDto){
    return this.usersService.removeRole(addRemoveRoleDto)
  }

  @ApiOperation(
    {
      summary: "Foydalanuvchini activatsiya qilish"
    }
  )
  @HttpCode(200)
  @Post("activate")
  async activateUser(@Body() activateUserDto:ActivateUserDto){
    return this.usersService.activateUser(activateUserDto)
  }
}
