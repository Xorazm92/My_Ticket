import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, Model, Table } from "sequelize-typescript"

interface AdminCreationAttr{
    name:string,
    login:string,
    hashed_password:string,
    is_active:boolean,
    is_creator:boolean,
    hashed_refresh_token: string
}

@Table({tableName:"admin", timestamps:false})
export class Admin extends Model<Admin, AdminCreationAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Admini id raqami (auto increment)"
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
            example: 2,
            description: "Admini ismi"
        }
    )
    @Column(
    {
        type:DataType.STRING,
        allowNull:true
    })
    name:string

    @ApiProperty(
        {
            example: 3,
            description: "Admini logini"
        }
    )
    @Column(
    {
        type:DataType.STRING,
        allowNull:true
    })
    login:string

    @ApiProperty(
        {
            example: 4,
            description: "Admini heshlangan paroli"
        }
    )
    @Column(
    {
        type:DataType.STRING,
        allowNull:true
    })
    hashed_password:string

    @ApiProperty(
        {
            example: 5,
            description: "Admini activ yoki activmasligi haqida malimot yozladi"
        }
    )
    @Column(
    {
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_active:boolean

    @ApiProperty(
        {
            example: 5,
            description: "Admini creator yoki creatormasligi haqida malimot yozladi"
        }
    )
    @Column(
    {
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_creator:boolean

    @ApiProperty(
        {
            example: 5,
            description: "Admini hashed refresh tokeni haqida malimot yozladi"
        }
    )
    @Column(
    {
        type:DataType.STRING
    })
    hashed_refresh_token: string

}