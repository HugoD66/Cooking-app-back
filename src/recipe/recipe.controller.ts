import {Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import {Ingredient} from "../ingredient/entities/ingredient.entity";
import {Recipe} from "./entities/recipe.entity";

@Controller('recipe')
export class RecipeController {
  constructor(
      private readonly recipeService: RecipeService
  ) {}

  @Post('new')
  async create(@Body() recipe: Recipe): Promise<Recipe> {
    return this.recipeService.create(recipe);
  }

  //@Post('create')
  //async createRecipeWithIngredients(@Body() createRecipeDto: CreateRecipeDto) {
  //  const { id, ingredients } = createRecipeDto;
  //  // Créez la recette avec les ingrédients
  //  const recipe = await this.recipeService.createRecipeWithIngredients(id, ingredients);
  //  return recipe;
  //}

  @Get()
  findAll() {
    return this.recipeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Recipe> {
    const recipe = await this.recipeService.findOne(id);
    if (!recipe) {
      throw new NotFoundException('Recipe does not exist!');
    } else {
      return recipe;
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() recipe: Recipe) {
    return this.recipeService.update(+id, recipe);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const recipe = await this.recipeService.findOne(id);
    if (!recipe) {
      throw new NotFoundException('ingredient does not exist!');
    }
    return this.recipeService.delete(id);
  }
}
