import { Repository } from "typeorm";
import { Ingredient } from "./entities/ingredient.entity";
export declare class IngredientService {
    private ingredientRepository;
    constructor(ingredientRepository: Repository<Ingredient>);
    create(ingredient: Partial<Ingredient>): Promise<Ingredient>;
    findAll(): Promise<Ingredient[]>;
    findOne(id: number): Promise<Ingredient>;
    update(id: number, ingredient: Partial<Ingredient>): Promise<Ingredient>;
    delete(id: number): Promise<void>;
}
