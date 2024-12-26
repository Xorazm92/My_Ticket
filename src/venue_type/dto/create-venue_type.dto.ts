import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueTypeDto{
    @ApiProperty(
        {
            example: "Joy turlarni nomi",
            description: "Bu yerda joy turlarini nomi saqlanadi"
        }
    )
    name:string;
}