import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { CustomerAddress } from "../../customer_address/models/customer_address.model"
import { CustomerCard } from "../../customer_card/models/customer_card.model"
import { Cart } from "../../cart/models/cart.model"

interface CustomerCreationAttr{
    first_name:string,
    last_name:string,
    phone:string,
    hashed_password:string,
    email:string,
    birth_date:Date,
    gender:number,
    langId: number,
    hashed_refresh_token: number
}

@Table({tableName:"customer", timestamps:false})
export class Customer extends Model<Customer, CustomerCreationAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Mijozning id raqami (auto increment)"
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
            description: "Mijozning familyasi"
        }
    )
    @Column(
    {
        type:DataType.STRING,
        allowNull:true
    })
    first_name:string

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
    last_name:string

    @ApiProperty(
        {
            example: 4,
            description: "Mijozning telefon raqami"
        }
    )
    @Column(
    {
        type:DataType.STRING,
        allowNull:true
    })
    phone:string

    @ApiProperty(
        {
            example: 5,
            description: "Mijozning heshlangan raqami"
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
            example: 6,
            description: "Mijozning eamili"
        }
    )
    @Column(
    {
        type:DataType.STRING,
        allowNull:true
    })
    email:string

    @ApiProperty(
        {
            example: 7,
            description: "Mijozning tugulgan vaqti"
        }
    )
    @Column(
    {
        type:DataType.DATE,
        defaultValue: new Date()
    })
    birth_date:Date

    @ApiProperty(
        {
            example: 8,
            description: "Mijozning jinsi"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    gender:number

    @ApiProperty(
        {
            example: 9,
            description: "Languagini id raqami"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    langId: number

    @ApiProperty(
        {
            example: 10,
            description: "Heshlangan refresh token"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    hashed_refresh_token: number

    @HasMany(()=> CustomerAddress)
    customer_address: CustomerAddress[]

    @HasMany(()=> CustomerCard)
    customer_cards: CustomerCard[]

    @HasMany(()=> Cart)
    cards: Cart[]

}