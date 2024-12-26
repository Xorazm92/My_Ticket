import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './models/user.model';
import { RolesService } from '../roles/roles.service';
import { AddRemoveRoleDto } from './dto/add-remove-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users) private UsersModule: typeof Users,
    private readonly rolesService: RolesService
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = await this.UsersModule.create(createUserDto)
    const role = await this.rolesService.findRoleByValue(createUserDto.role_value)

    if(!role)
      throw new BadRequestException("Role not found...");
    
    // await newUser.$set("roles",[role.id])
    // await newUser.save()

    newUser.roles = [role];
    return newUser
  }

  findAll() {
    return this.UsersModule.findAll({include:{all:true}})
  }

  findUserByEmail(email:string){
    return this.UsersModule.findOne({where:{email}, include:{all:true,attributes:["value"],through:{attributes:[]}}})
  }

  findOne(id: number) {
    return this.UsersModule.findOne({where:{id},include:{all:true}})
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<Users> {
    const users = await this.UsersModule.findByPk(id);
  
    if (!users) {
      throw new NotFoundException(`Users with ID ${id} not found...`);
    }
    
    users.update(updateUserDto)
        
    return users; 
  }
  
  async remove(id: number):Promise<void> {
    const users = await this.UsersModule.findByPk(id);
    if (!users) {
      throw new NotFoundException(`Users with ID ${id} not found...`);
    }
    await users.destroy();
  }

  async addRole(addRemoveRoleDto:AddRemoveRoleDto){
    const user = await this.UsersModule.findByPk(addRemoveRoleDto.userId)
    const role = await this.rolesService.findRoleByValue(addRemoveRoleDto.role_value)
    if(role && user){
      await user.$add("roles", role.id)
      const updateUser = await this.UsersModule.findByPk(
        addRemoveRoleDto.userId,
        {include:{all:true}}
      )

      return updateUser
    }
  }

  async removeRole(addRemoveRoleDto:AddRemoveRoleDto){
    const user = await this.UsersModule.findByPk(addRemoveRoleDto.userId)
    const role = await this.rolesService.findRoleByValue(addRemoveRoleDto.role_value)
    if(role && user){
      await user.$remove("roles", role.id)
      const updateUser = await this.UsersModule.findByPk(
        addRemoveRoleDto.userId,
        {include:{all:true}}
      )

      return updateUser
    }
  }

  async activateUser(activateUserDto:ActivateUserDto){
    const user = await this.UsersModule.findByPk(activateUserDto.userId)
    if(user){

      user.is_active = true
      await user.save()

      return user
    }

    throw new NotFoundException("User not found...")
  }
}
