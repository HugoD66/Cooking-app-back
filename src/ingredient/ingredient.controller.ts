import {Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import {Ingredient} from "./entities/ingredient.entity";

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Post('new')
  async create(@Body() ingredient: Ingredient): Promise<Ingredient> {
    return this.ingredientService.create(ingredient);
  }

  @Get()
  findAll(): Promise<Ingredient[]> {
    return this.ingredientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Ingredient> {
    const ingredient = await this.ingredientService.findOne(id);
    if (!ingredient) {
      throw new NotFoundException('Ingredient does not exist!');
    } else {
      return ingredient;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() ingredient: Ingredient): Promise<any> {
    return this.ingredientService.update(id, ingredient);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const ingredient = await this.ingredientService.findOne(id);
    if (!ingredient) {
      throw new NotFoundException('ingredient does not exist!');
    }
    return this.ingredientService.delete(id);
  }
}
