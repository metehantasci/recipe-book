import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { DEFAULT_RECIPES } from '../data/default-recipes';

import { StorageService } from '../../../core/services/storage.service';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private readonly STORAGE_KEY = 'recipes';

  private readonly recipesSubject =
    new BehaviorSubject<Recipe[]>([]);

  readonly recipes$: Observable<Recipe[]> =
    this.recipesSubject.asObservable();

  constructor(
    private storage: StorageService
  ) {

    this.loadRecipes();

  }

  getRecipes(): Recipe[] {

    return this.recipesSubject.value;

  }

  getRecipe(id: number): Recipe | undefined {

    return this.recipesSubject.value.find(
      recipe => recipe.id === id
    );

  }

  addRecipe(recipe: Recipe): void {

    const recipes = [
      ...this.recipesSubject.value,
      recipe
    ];

    this.saveRecipes(recipes);

  }

  updateRecipe(updatedRecipe: Recipe): void {

    const recipes = this.recipesSubject.value.map(recipe =>
      recipe.id === updatedRecipe.id
        ? updatedRecipe
        : recipe
    );

    this.saveRecipes(recipes);

  }

  deleteRecipe(id: number): void {

    const recipes =
      this.recipesSubject.value.filter(recipe =>
        recipe.id !== id
      );

    this.saveRecipes(recipes);

  }

  toggleFavorite(id: number): void {

    const recipes =
      this.recipesSubject.value.map(recipe => {

        if (recipe.id === id) {

          return {
            ...recipe,
            favorite: !recipe.favorite
          };

        }

        return recipe;

      });

    this.saveRecipes(recipes);

  }

  private loadRecipes(): void {

  const recipes =
    this.storage.getItem<Recipe[]>(this.STORAGE_KEY);

  if (recipes) {

    this.recipesSubject.next(recipes);

    return;

  }

  this.storage.setItem(
    this.STORAGE_KEY,
    DEFAULT_RECIPES
  );

  this.recipesSubject.next(DEFAULT_RECIPES);

}

  private saveRecipes(recipes: Recipe[]): void {

    this.storage.setItem(
      this.STORAGE_KEY,
      recipes
    );

    this.recipesSubject.next(recipes);

  }

}