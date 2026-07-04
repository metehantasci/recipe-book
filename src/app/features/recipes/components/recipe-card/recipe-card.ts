import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { CapitalizePipe } from '../../../../shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CapitalizePipe
  ],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss'
})
export class RecipeCard {

  readonly recipe = input.required<Recipe>();

  readonly favoriteClick = output<number>();

  readonly deleteClick = output<number>();

  toggleFavorite() {
    this.favoriteClick.emit(this.recipe().id);
  }

  onDelete() {
    this.deleteClick.emit(this.recipe().id);
  }

}