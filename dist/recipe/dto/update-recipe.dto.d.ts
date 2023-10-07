import { CreateRecipeDto } from './create-recipe.dto';
import { Ingredient } from "../../ingredient/entities/ingredient.entity";
declare const UpdateRecipeDto_base: import("@nestjs/common").Type<Partial<CreateRecipeDto>>;
export declare class UpdateRecipeDto extends UpdateRecipeDto_base {
    id: number;
    name: string;
    ingredients: Ingredient[];
}
export {};
