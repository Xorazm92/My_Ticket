import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from "@nestjs/common";
import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Joy turi")
@Controller('venue-type')
export class VenueTypeController {
    constructor(private readonly venueTypeService: VenueTypeService) {}
  
    @ApiOperation(
      {
        summary: "Joy turini qoshish"
      }
    )
    @Post()
    async createVenueType(
      @Body() createVenueTypeDto: CreateVenueTypeDto
    ) {
      const venue_type = await this.venueTypeService.createVenueType(
        createVenueTypeDto
      );
      return venue_type;
    }
  
    @ApiOperation(
      {
        summary: "Joy turlarini korish"
      }
    )
    @Get("all")
    async getAllVenueType() {
      return this.venueTypeService.getAllVenueType();
    }
  
    @ApiOperation(
      {
        summary: "Joy turlarini korish id yordamida"
      }
    )
    @Get(":id")
    async getVenueTypeById(@Param("id") id: number) {
      return this.venueTypeService.getVenueTypeById(id);
    }
  
    @ApiOperation(
      {
        summary: "Joy turlarini korish nomi yordamida"
      }
    )
    @Get("name/:name")
    async getVenueTypeByName(@Param("name") name: string) {
      return this.venueTypeService.getVenueTypeByName(name);
    }
  
    @ApiOperation(
      {
        summary: "Joy turlarini korish id yordamida"
      }
    )
    @Put(":id")
    async updateVenueType(
      @Param("id") id: number,
      @Body() updateVenueTypeDto: UpdateVenueTypeDto
    ) {
      return this.venueTypeService.updateVenueType(
        id,
        updateVenueTypeDto
      );
    }
  
    @ApiOperation(
      {
        summary: "Joy turlarini ochrish id yordamida"
      }
    )
    @Delete(":id")
    async deleteVenueType(@Param("id") id: number) {
      return this.venueTypeService.deleteVenueType(id);
    }
  };
  