import { IngredientService } from './ingredient.service';
import { Ingredient } from "./entities/ingredient.entity";
export declare class IngredientController {
    private readonly ingredientService;
    constructor(ingredientService: IngredientService);
    create(ingredient: Ingredient): Promise<Ingredient>;
    findAll(): Promise<Ingredient[]>;
    findOne(id: number): Promise<Ingredient>;
    update(id: number, ingredient: Ingredient): Promise<any>;
    delete(id: number): Promise<any>;
}
