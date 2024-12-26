import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from "@nestjs/common";
import { SeatTypeService } from "./seat_type.service";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Orindiq turi")
@Controller('seat-type')
export class SeatTypeController {
    constructor(private readonly seatTypeService: SeatTypeService) {}
  
    @ApiOperation(
      {
        summary: "Orindiq turini qoshish"
      }
    )
    @Post()
    async createSeatType(
      @Body() createSeatTypeDto: CreateSeatTypeDto
    ) {
      const seat_type = await this.seatTypeService.createSeatType(
        createSeatTypeDto
      );
      return seat_type;
    }
  
    @ApiOperation(
      {
        summary: "Orindiq turlarini korish"
      }
    )
    @Get("all")
    async getAllSeatType() {
      return this.seatTypeService.getAllSeatType();
    }
  
    @ApiOperation(
      {
        summary: "Orindiq turini korish id yordamida"
      }
    )
    @Get(":id")
    async getSeatTypeById(@Param("id") id: number) {
      return this.seatTypeService.getSeatTypeById(id);
    }
  
    @ApiOperation(
      {
        summary: "Orindiq turini korish nomi yordamida "
      }
    )
    @Get("name/:name")
    async getSeatTypeByName(@Param("name") name: string) {
      return this.seatTypeService.getSeatTypeByName(name);
    }
  
    @ApiOperation(
      {
        summary: "Orindiq turini ozgartirish id yordamida"
      }
    )
    @Put(":id")
    async updateSeatType(
      @Param("id") id: number,
      @Body() updateSeatTypeDto: UpdateSeatTypeDto
    ) {
      return this.seatTypeService.updateSeatType(
        id,
        updateSeatTypeDto
      );
    }
  
    @ApiOperation(
      {
        summary: "Orindiq turini ochrish id yordamida"
      }
    )
    @Delete(":id")
    async deleteSeatType(@Param("id") id: number) {
      return this.seatTypeService.deleteSeatType(id);
    }
  }
