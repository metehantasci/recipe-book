import { Routes } from '@angular/router';

export const RECIPES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/recipes-list/recipes-list')
        .then(c => c.RecipesList)
  },
  {
    path: 'new',
    loadComponent: () =>
      import('./pages/recipe-form/recipe-form')
        .then(c => c.RecipeFormComponent)
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/recipe-detail/recipe-detail')
        .then(c => c.RecipeDetail)
  },
  {
    path: ':id/edit',
  loadComponent: () =>
    import('./pages/recipe-form/recipe-form')
      .then(c => c.RecipeFormComponent)
  }
];