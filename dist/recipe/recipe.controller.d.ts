import { RecipeService } from './recipe.service';
import { Recipe } from "./entities/recipe.entity";
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    create(recipe: Recipe): Promise<Recipe>;
    findAll(): Promise<Recipe[]>;
    findOne(id: number): Promise<Recipe>;
    update(id: string, recipe: Recipe): Promise<Recipe>;
    delete(id: number): Promise<any>;
}
