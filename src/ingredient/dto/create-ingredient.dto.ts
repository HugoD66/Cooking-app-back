import {Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Recipe} from "../../recipe/entities/recipe.entity";
import {ApiProperty} from "@nestjs/swagger";

export class CreateIngredientDto {
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
