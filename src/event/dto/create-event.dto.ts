import { ApiProperty } from "@nestjs/swagger"

export class CreateEventDto {
    @ApiProperty(
        {
            example: "Voqia nomi",
            description: "Bu yerda voqia nomi saqlanadi"
        }
    )
    name:string

    @ApiProperty(
        {
            example: "Voqia rasmi saqlanadi",
            description: "Bu yerda voqia rasmi saqlanadi"
        }
    )
    photo:string

    @ApiProperty(
        {
            example: "Voqia boshlanish sanasi",
            description: "Bu yerda voqia boshlanish sanasi saqlanadi"
        }
    )
    start_date:Date

    @ApiProperty(
        {
            example: "Voqia boshlanish vaqti",
            description: "Bu yerda voqia boshlanish vaqti saqlanadi"
        }
    )
    start_time:Date

    @ApiProperty(
        {
            example: "Voqia tugash sanasi",
            description: "Bu yerda voqia tugash sanasi saqlanadi"
        }
    )
    finish_date:Date

    @ApiProperty(
        {
            example: "Voqia tugash vaqti",
            description: "Bu yerda voqia tugash vaqti saqlanadi"
        }
    )
    finish_time:Date

    @ApiProperty(
        {
            example: "Voqia haqida malimot",
            description: "Bu yerda voqia haqida toliq malimot saqlanadi"
        }
    )
    info:string

    @ApiProperty(
        {
            example: "Voqia turlarini id raqami",
            description: "Bu yerda voqia turlarini id raqami saqlanadi"
        }
    )
    event_typeId: number

    @ApiProperty(
        {
            example: "Inson turlarini id raqami",
            description: "Bu yerda inson turlarini id raqami saqlanadi"
        }
    )
    human_categoryId: number

    @ApiProperty(
        {
            example: "Joy id raqami",
            description: "Bu yerda Joy id raqami saqlanadi"
        }
    )
    venueId: number

    @ApiProperty(
        {
            example: "Voqia tilini id raqami",
            description: "Bu yerda voqia tilini id raqami saqlanadi"
        }
    )
    langId: number

    @ApiProperty(
        {
            example: "Voqiani davomilig sanasi",
            description: "Bu yerda voqiani davomilig sanasi saqlanadi"
        }
    )
    relase_date: Date
};
