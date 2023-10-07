import { Recipe } from "../../recipe/entities/recipe.entity";
export declare class CreateIngredientDto {
    id: number;
    name: string;
    quantity: number;
    recipe: Recipe;
}
