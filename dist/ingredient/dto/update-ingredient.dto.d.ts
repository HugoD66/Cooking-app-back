import { CreateIngredientDto } from './create-ingredient.dto';
import { Recipe } from "../../recipe/entities/recipe.entity";
declare const UpdateIngredientDto_base: import("@nestjs/common").Type<Partial<CreateIngredientDto>>;
export declare class UpdateIngredientDto extends UpdateIngredientDto_base {
    id: number;
    name: string;
    quantity: number;
    recipe: Recipe;
}
export {};
