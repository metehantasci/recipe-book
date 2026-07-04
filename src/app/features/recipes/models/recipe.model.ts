import { RecipeCategory } from './recipe-category';

export type RecipeDifficulty = 'Kolay' | 'Orta' | 'Zor';

export interface Recipe {

  id: number;

  title: string;

  category: RecipeCategory;

  image: string;

  ingredients: string[];

  instructions: string[];

  duration: number;

  servings: number;

  difficulty: RecipeDifficulty;

  tip: string;

  favorite: boolean;

  createdAt: string;

}