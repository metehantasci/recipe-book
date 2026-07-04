import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },

  {
    path: 'recipes',
    loadChildren: () =>
      import('./features/recipes/recipes.routes')
        .then(r => r.RECIPES_ROUTES)
  },

  {
    path: '**',
    redirectTo: 'recipes'
  }

];