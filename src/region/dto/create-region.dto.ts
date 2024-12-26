import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
    @ApiProperty(
        {
            example: "Mintaqa nomi",
            description: "Bu yerda mintaqa nomi saqlanadi"
        }
    )
    name:string
}
