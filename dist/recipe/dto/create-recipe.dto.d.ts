import { Ingredient } from "../../ingredient/entities/ingredient.entity";
export declare class CreateRecipeDto {
    id: number;
    name: string;
    ingredients: Ingredient[];
}
