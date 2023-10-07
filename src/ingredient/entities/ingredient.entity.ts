import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Recipe } from '../../recipe/entities/recipe.entity';

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @ManyToOne(() => Recipe, recipe => recipe.ingredients)
    recipe: Recipe;
}
