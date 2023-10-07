import { Injectable} from '@nestjs/common';
import {Recipe} from "./entities/recipe.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class RecipeService {
  constructor(
      @InjectRepository(Recipe)
      private recipeRepository: Repository<Recipe>
  ) {}

  async create(recipe: Partial<Recipe>): Promise<Recipe> {
    const newRecipe = this.recipeRepository.create(recipe);
    return this.recipeRepository.save(newRecipe);
  }
  async findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  async findOne(id: number): Promise<Recipe> {
    return this.recipeRepository.findOne({ where: { id } });
  }

  async update(id: number, recipe: Partial<Recipe>): Promise<Recipe> {
    await this.recipeRepository.update(id, recipe);
    return this.recipeRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.recipeRepository.delete(id);
  }
}
