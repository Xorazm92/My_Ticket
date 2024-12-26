import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Users } from "./user.model"
import { Roles } from "../../roles/models/role.model"

interface IUserRoleCreateAttr{
    userId:number,
    roleId:number,
}

@Table({tableName:"user_roles", timestamps:false})
export class UserRoles extends Model<UserRoles, IUserRoleCreateAttr>{
    @ForeignKey(() => Users)
    @Column({type:DataType.INTEGER})
    userId: number

    @ForeignKey(() => Roles)
    @Column({type:DataType.INTEGER})
    roleId: number
}
