import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './models/user.model';
import { UserRoles } from './models/user-role.model';
import { RolesModule } from '../roles/roles.module';
import { Roles } from '../roles/models/role.model';

@Module({
  imports:[SequelizeModule.forFeature([Users,UserRoles,Roles]),RolesModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
