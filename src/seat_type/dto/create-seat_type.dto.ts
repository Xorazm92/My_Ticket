import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatTypeDto{
    @ApiProperty(
        {
            example: "Orindiq turini nomi",
            description: "Bu yerda orindiq turini nomi saqlanadi"
        }
    )
    name:string;
}