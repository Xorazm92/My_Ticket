import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Customer } from "../../customer/models/customer.model"

interface CustomerAddressAttr{
    customerId:number,
    name:string,
    countryId:number,
    region_id:number,
    districtId:number,
    street:string,
    house:string,
    flat: number,
    location: string,
    post_index: string,
    info: string
}

@Table({tableName:"customer_address", timestamps:false})
export class CustomerAddress extends Model<CustomerAddress, CustomerAddressAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Mijoz addressni id raqami (auto increment)"
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
            description: "Mijozning id raqami (foreignKey yordamida boglangan)"
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
            description: "Mijozning ismi"
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
            description: "Mamlakat id raqami"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    countryId:number

    @ApiProperty(
        {
            example: 5,
            description: "Mintqa id raqami"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    region_id:number

    @ApiProperty(
        {
            example: 6,
            description: "Tuman id raqami"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    districtId:number

    @ApiProperty(
        {
            example: 7,
            description: "Kocha nomi"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    street:string

    @ApiProperty(
        {
            example: 8,
            description: "Uy nomi"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    house:string

    @ApiProperty(
        {
            example: 9,
            description: "Tekislik nomi"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    flat: number

    @ApiProperty(
        {
            example: 10,
            description: "Joylashuv nomi"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    location: string

    @ApiProperty(
        {
            example: 11,
            description: "Pochta indeksi"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    post_index: string

    @ApiProperty(
        {
            example: 12,
            description: "Mijoz haqida toliq malimot"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    info: string


}