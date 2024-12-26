import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
  } from "@nestjs/common";
  import { HumanCategoryService } from "./human_category.service";
  import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
  import { updateHumanCategoryDto } from "./dto/update-human_category.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "../guards/roles.guard";
import { JwtAdminGuard } from "../guards/jwt-admin.guard";
  
  @ApiTags("Inson turi")
  @Controller("human-category")
  export class HumanCategoryController {
    constructor(private readonly humanCategoryService: HumanCategoryService) {}
 
    @ApiOperation(
      {
        summary: "Inson turini qoshish"
      }
    )
    @UseGuards(RolesGuard)
    @UseGuards(JwtAdminGuard)
    @Post()
    async createHumanCategory(
      @Body() createHumanCategoryDto: CreateHumanCategoryDto
    ) {
      const human_category = await this.humanCategoryService.createHumanCategory(
        createHumanCategoryDto
      );
      return human_category;
    }
  
    @ApiOperation(
      {
        summary: "Inson turlarini korish"
      }
    )
    @UseGuards(RolesGuard)
    @UseGuards(JwtAdminGuard)
    @Get("all")
    async getAllHumanCategory() {
      return this.humanCategoryService.getAllHumanCategory();
    }
  
    @ApiOperation(
      {
        summary: "Inson turini korish id yordamida"
      }
    )
    @Get(":id")
    async getHumanCategoryById(@Param("id") id: number) {
      return this.humanCategoryService.getHumanCategoryById(id);
    }

    @ApiOperation(
      {
        summary: "Inson turini korish name yordamida"
      }
    )
    @Get("name/:name")
    async getHumanCategoryByName(@Param("name") name: string) {
      return this.humanCategoryService.getHumanCategoryByName(name);
    }
  
    @ApiOperation(
      {
        summary: "Inson turini ozgartirish id yordamida"
      }
    )
    @UseGuards(RolesGuard)
    @UseGuards(JwtAdminGuard)
    @Put(":id")
    async updateHumanCategory(
      @Param("id") id: number,
      @Body() updateHumanCategoryDto: updateHumanCategoryDto
    ) {
      return this.humanCategoryService.updateHumanCategory(
        id,
        updateHumanCategoryDto
      );
    }

    @ApiOperation(
      {
        summary: "Inson turini ochrish id yordamida"
      }
    )
    @UseGuards(RolesGuard)
    @UseGuards(JwtAdminGuard)
    @Delete(":id")
    async deleteHumanCategory(@Param("id") id: number) {
      return this.humanCategoryService.deletehumanCategory(id);
    }
  }
  