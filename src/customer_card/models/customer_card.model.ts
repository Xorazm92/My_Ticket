import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Customer } from "../../customer/models/customer.model"

interface CustomerCardAttr{
    customerId:number,
    name:string,
    phone:string,
    number:string,
    year:string,
    month:string,
    is_active: boolean,
    is_main: boolean,
}

@Table({tableName:"customer_card", timestamps:false})
export class CustomerCard extends Model<CustomerCard, CustomerCardAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Mijozn kartasini id raqami (auto increment)"
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
            description: "Mijozning id raqami (foreiginKey yordamda boglangan)"
        }
    )
    @ForeignKey(() => Customer)
    @Column({
        type:DataType.INTEGER
    })
    customerId:number

    @BelongsTo(() => Customer)
    customer:Customer

    @ApiProperty(
        {
            example: 3,
            description: "Mijozning kartasini nomi"
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
            example: 4,
            description: "Mijozning telfon raqami"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    phone:string

    @ApiProperty(
        {
            example: 5,
            description: "Mijozning raqami"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    number:string

    @ApiProperty(
        {
            example: 6,
            description: "Mijozning yili"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    year:string

    @ApiProperty(
        {
            example: 7,
            description: "Mijozning oyi"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    month:string

    @ApiProperty(
        {
            example: 8,
            description: "Mijozning activ yoki activmasligi"
        }
    )
    @Column(
    {
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean

    @ApiProperty(
        {
            example: 9,
            description: "Mijozning asosiy yoki yoqligi"
        }
    )
    @Column(
    {
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_main: boolean

}