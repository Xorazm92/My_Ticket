import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { HumanCategory } from "./models/human_category.model";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { updateHumanCategoryDto } from "./dto/update-human_category.dto";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory) private humanCategoryModel: typeof HumanCategory
  ) {}

  async createHumanCategory(
    createHumanCategoryDto: CreateHumanCategoryDto
  ): Promise<HumanCategory> {
    const humanCategory = await this.humanCategoryModel.create(
      createHumanCategoryDto
    );
    return humanCategory;
  }

  async getAllHumanCategory(): Promise<HumanCategory[]> {
    const humanCategories = await this.humanCategoryModel.findAll({include:{all:true}});
    return humanCategories;
  }

  async getHumanCategoryById(id: number): Promise<HumanCategory> {
    const humanCategory = await this.humanCategoryModel.findByPk(id);
    if (!humanCategory) {
      throw new NotFoundException(`Human category with ID ${id} not found...`);
    }
    return humanCategory;
  }

  async getHumanCategoryByName(name: string): Promise<HumanCategory> {
    const humanCategory = await this.humanCategoryModel.findOne({
      where: { name },
    });
    if (!humanCategory) {
      throw new NotFoundException(`Human category with name ${name} not found...`);
    }
    return humanCategory;
  }

  async updateHumanCategory(
    id: number,
    updateHumanCategoryDto: updateHumanCategoryDto
  ): Promise<HumanCategory> {
    // const humanCategory = await this.humanCategoryModel.update(
    //   updateHumanCategoryDto,
    //   { where:{id}, returning: true }
    // );

    const humanCategory = await this.humanCategoryModel.findByPk(id);
    if (!humanCategory) {
      throw new NotFoundException(`Human category with ID ${id} not found...`);
    }
    await humanCategory.update(updateHumanCategoryDto);
    return humanCategory;
  }

  async deletehumanCategory(id: number): Promise<void> {
    const humanCategory = await this.humanCategoryModel.findByPk(id);
    if (!humanCategory) {
      throw new NotFoundException(`Human category with ID ${id} not found...`);
    }
    await humanCategory.destroy();
  }
}
