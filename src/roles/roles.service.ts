import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from './models/role.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Roles) private RolesModule: typeof Roles
  ) {}
  create(createRoleDto: CreateRoleDto) {
    return this.RolesModule.create(
      {
        value:createRoleDto.value.toUpperCase(),
        description: createRoleDto.description
      })
  }

  findAll() {
    return this.RolesModule.findAll()
  }

  findRoleByValue(value:string){
    return this.RolesModule.findOne({where:{value}})
  }

  findOne(id: number) {
    return this.RolesModule.findByPk(id)
  }

  async update(id: number, updateRoleDto: UpdateRoleDto):Promise<Roles> {
    const role = await this.RolesModule.findByPk(id);
  
    if (!role) {
      throw new NotFoundException(`Role with ID ${id} not found...`);
    }
    
    role.update(updateRoleDto)
        
    return role; 
  }
  
  async remove(id: number): Promise<void> {
    const role = await this.RolesModule.findByPk(id);
    if (!role) {
      throw new NotFoundException(`Role with ID ${id} not found...`);
    }
    await role.destroy();
  }
};
