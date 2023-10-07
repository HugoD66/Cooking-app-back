import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateRecipeDto } from './create-recipe.dto';
import {Column, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Ingredient} from "../../ingredient/entities/ingredient.entity";

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    @OneToMany(() => Ingredient, ingredient => ingredient.recipe)
    ingredients: Ingredient[];

    @ApiProperty()
    photoUrl: string;
}
