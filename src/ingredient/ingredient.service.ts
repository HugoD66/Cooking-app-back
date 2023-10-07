import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Ingredient} from "./entities/ingredient.entity";

@Injectable()
export class IngredientService {
  constructor(
      @InjectRepository(Ingredient)
      private ingredientRepository: Repository<Ingredient>,
  ) {}
  async create(ingredient: Partial<Ingredient>): Promise<Ingredient> {
    const newIngredient = this.ingredientRepository.create(ingredient);
    return this.ingredientRepository.save(newIngredient);
  }

  async findAll(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  async findOne(id: number): Promise<Ingredient> {
    return this.ingredientRepository.findOne({ where: { id } });
  }

  async update(id: number, ingredient: Partial<Ingredient>): Promise<Ingredient> {
    await this.ingredientRepository.update(id, ingredient);
    return this.ingredientRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.ingredientRepository.delete(id);
  }
}
