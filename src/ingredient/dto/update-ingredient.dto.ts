import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateIngredientDto } from './create-ingredient.dto';
import {Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Recipe} from "../../recipe/entities/recipe.entity";

export class UpdateIngredientDto extends PartialType(CreateIngredientDto) {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    quantity: number;

    @ApiProperty()
    @ManyToOne(() => Recipe, recipe => recipe.ingredients)
    recipe: Recipe;
}
