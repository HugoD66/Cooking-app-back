import {Column, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Ingredient} from "../../ingredient/entities/ingredient.entity";
import {ApiProperty} from "@nestjs/swagger";

export class CreateRecipeDto {
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
