import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.scss'
})
export class RecipeDetail {

  private readonly route = inject(ActivatedRoute);

  private readonly router = inject(Router);

  private readonly recipesService =
    inject(RecipesService);

  readonly recipe =
    signal<Recipe | undefined>(undefined);

  constructor() {

    const id =
      Number(this.route.snapshot.paramMap.get('id'));

    this.recipe.set(
      this.recipesService.getRecipe(id)
    );

  }

  deleteRecipe(): void {

    const currentRecipe = this.recipe();

    if (!currentRecipe) {
      return;
    }

    const confirmed = confirm(
      `"${currentRecipe.title}" tarifini silmek istiyor musunuz?`
    );

    if (!confirmed) {
      return;
    }

    this.recipesService.deleteRecipe(currentRecipe.id);

    this.router.navigate(['/recipes']);

  }

}