import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt"
import { SignInDto } from './dto/signin.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Users } from '../users/models/user.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private AdminModel: typeof Admin,
    private readonly userService:UsersService,
    private readonly jwtService: JwtService   
  ) {}

  create(createAdminDto: CreateAdminDto) {
    return this.AdminModel.create(createAdminDto)
  }
  
  async signUp(createUserDto:CreateUserDto){
    const candidate =  await this.userService.findUserByEmail(
        createUserDto.email
    );

    if(candidate)
        throw new BadRequestException("User already exists...")
    
    const hashedPassword = await bcrypt.hash(createUserDto.password, 7)

    const newUser = await this.userService.create(
        {
            ...createUserDto, password: hashedPassword
        }
    )
    return this.generateToken(newUser)
};

async signIn(signInDto:SignInDto){
    const user = await this.userService.findUserByEmail(signInDto.email);

    if(!user)
        throw new UnauthorizedException("User not found...")

    const validPassword = await bcrypt.compare(signInDto.password,user.password)

    if(!validPassword)
    throw new UnauthorizedException("User not found...")

    return this.generateToken(user)
}

async generateToken(user:Users){
    const payload = {
        sub:user.id,
        email:user.email,
        roles:user.roles
    }
    return this.jwtService.sign(payload)
};

  findAll() {
    return this.AdminModel.findAll()
  }

  findOne(id: number) {
    return this.AdminModel.findOne({where: {id}})
  }

  async update(id: number, updateAdminDto: UpdateAdminDto):Promise<Admin> {
    const admin = await this.AdminModel.findByPk(id);
  
    if (!admin) {
      throw new NotFoundException(`Admin with ID ${id} not found...`);
    }
    
    admin.update(updateAdminDto)
        
    return admin
  }

  async remove(id: number):Promise<void> {
    const admin = await this.AdminModel.findByPk(id);
    if (!admin) {
      throw new NotFoundException(`Admin with ID ${id} not found...`);
    }
    await admin.destroy();
  }
}
