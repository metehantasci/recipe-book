import {
  Component,
  computed,
  inject,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { RecipesService } from '../../services/recipes.service';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { RECIPE_CATEGORIES } from '../../models/recipe-category';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RecipeCard
  ],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.scss'
})
export class RecipesList {

  private readonly recipesService =
    inject(RecipesService);

  readonly recipes = toSignal(
    this.recipesService.recipes$,
    {
      initialValue: [] as Recipe[]
    }
  );

  readonly categories = [
    'Tümü',
    ...RECIPE_CATEGORIES
  ];

  readonly search = signal('');

  readonly selectedCategory =
    signal('Tümü');

  readonly onlyFavorites =
    signal(false);

  readonly favoriteFirst =
    signal(false);

  readonly sortType = signal<
    'none'
    | 'az'
    | 'za'
    | 'durationAsc'
    | 'durationDesc'
    | 'newest'
  >('none');

  readonly filteredRecipes = computed(() => {

    let recipes = [...this.recipes()];

    if (this.search().trim()) {

      recipes = recipes.filter(recipe =>

        recipe.title
          .toLowerCase()
          .includes(
            this.search()
              .toLowerCase()
          )

      );

    }

    if (
      this.selectedCategory() !==
      'Tümü'
    ) {

      recipes = recipes.filter(recipe =>

        recipe.category ===
        this.selectedCategory()

      );

    }

    if (
      this.onlyFavorites()
    ) {

      recipes = recipes.filter(recipe =>

        recipe.favorite

      );

    }

    recipes.sort((a, b) => {

      if (
        this.favoriteFirst() &&
        a.favorite !== b.favorite
      ) {

        return Number(b.favorite) -
          Number(a.favorite);

      }

      switch (
        this.sortType()
      ) {

        case 'az':

          return a.title.localeCompare(
            b.title,
            'tr'
          );

        case 'za':

          return b.title.localeCompare(
            a.title,
            'tr'
          );

        case 'durationAsc':

          return a.duration -
            b.duration;

        case 'durationDesc':

          return b.duration -
            a.duration;

        case 'newest':

          return (
            new Date(
              b.createdAt
            ).getTime()
            -
            new Date(
              a.createdAt
            ).getTime()
          );

        default:

          return 0;

      }

    });

    return recipes;

  });

  readonly totalRecipes = computed(() =>
  this.recipes().length
);

readonly totalFavorites = computed(() =>
  this.recipes().filter(recipe => recipe.favorite).length
);

readonly currentCategoryCount = computed(() =>
  this.filteredRecipes().length
);

  updateSearch(
    value: string
  ): void {

    this.search.set(value);

  }

  updateCategory(
    value: string
  ): void {

    this.selectedCategory.set(
      value
    );

  }

  toggleFavorites(): void {

    this.onlyFavorites.update(
      value => !value
    );

  }

  toggleFavoriteFirst(): void {

    this.favoriteFirst.update(
      value => !value
    );

  }

  changeSort(
    value:
      | 'none'
      | 'az'
      | 'za'
      | 'durationAsc'
      | 'durationDesc'
      | 'newest'
  ): void {

    this.sortType.set(
      value
    );

  }

  toggleFavorite(
    id: number
  ): void {

    this.recipesService
      .toggleFavorite(id);

  }

  deleteRecipe(
    id: number
  ): void {

    const confirmed =
      confirm(
        'Bu tarifi silmek istediğinize emin misiniz?'
      );

    if (!confirmed) {

      return;

    }

    this.recipesService
      .deleteRecipe(id);

  }

}