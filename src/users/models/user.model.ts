import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript"
import { UserRoles } from "./user-role.model"
import { ApiProperty } from "@nestjs/swagger"
import { Roles } from "../../roles/models/role.model"

interface UsersCreateAttr{
    name:string,
    email:string,
    password:string,
    role_value:string,
}

@Table({tableName:"users", timestamps:false})
export class Users extends Model<Users, UsersCreateAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Foydalanuvchining id raqami (auto increment)"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id?: number
    
    @ApiProperty(
        {
            example: 1,
            description: "Foydalanuvchining ismi"
        }
    )
    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    name:string

    @ApiProperty(
        {
            example: 1,
            description: "Foydalanuvchining emaili"
        }
    )
    @Column({
        type:DataType.STRING,
        unique:true,
        allowNull: true
    })
    email: string

    @ApiProperty(
        {
            example: 1,
            description: "Foydalanuvchining paroli"
        }
    )
    @Column({
        type:DataType.STRING,
    })
    password:string

    @ApiProperty(
        {
            example: 1,
            description: "Foydalanuvchining dastlabki roli (defaulti valuesi false)"
        }
    )
    @Column({
        type:DataType.STRING,
    })
    role_value:string

    @ApiProperty(
        {
            example: 1,
            description: "Foydalanuvchining faoligi"
        }
    )
    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    is_active:boolean

    @BelongsToMany(()=>Roles,()=> UserRoles)
    roles:Roles[]

}
