import { ApiProperty } from "@nestjs/swagger";

export class CreateHumanCategoryDto{
    @ApiProperty(
        {
            example: "Inson turining nomi",
            description: "Bu yerda inson turining nomi saqlanadi"
        }
    )
    name:string;

    @ApiProperty(
        {
            example: "Boshlangich yoshi",
            description: "Bu yerda boshlangich yoshi saqlanadi"
        }
    )
    start_age:number;

    @ApiProperty(
        {
            example: "Tugash yoshi",
            description: "Bu yerda tugash yoshi saqlanadi"
        }
    )
    finish_age:number;

    @ApiProperty(
        {
            example: "Jinsi",
            description: "Bu yerda inson turing jinsi saqlanadi"
        }
    )
    gender:number;
}