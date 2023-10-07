import { Recipe } from '../../recipe/entities/recipe.entity';
export declare class Ingredient {
    id: number;
    name: string;
    quantity: number;
    recipe: Recipe;
}
