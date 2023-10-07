import { Recipe } from "./entities/recipe.entity";
import { Repository } from "typeorm";
export declare class RecipeService {
    private recipeRepository;
    constructor(recipeRepository: Repository<Recipe>);
    create(recipe: Partial<Recipe>): Promise<Recipe>;
    findAll(): Promise<Recipe[]>;
    findOne(id: number): Promise<Recipe>;
    update(id: number, recipe: Partial<Recipe>): Promise<Recipe>;
    delete(id: number): Promise<void>;
}
