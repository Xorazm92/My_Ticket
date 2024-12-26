import { ApiProperty } from "@nestjs/swagger"

export class CreateEventTypeDto {
    @ApiProperty(
        {
            example: "Voqia turlarini nomi",
            description: "Bu yerda voqia turlarini nomi saqlanadi"
        }
    )
    name:string

    @ApiProperty(
        {
            example: "Ota-Ona hodisa turining id raqami",
            description: "Bu yerda Ota-Ona hodisa turining id raqami saqlanadi"
        }
    )
    parent_event_type_id:number
}
