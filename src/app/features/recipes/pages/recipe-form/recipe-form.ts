import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterModule
} from '@angular/router';

import { Recipe } from '../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.scss'
})
export class RecipeFormComponent implements OnInit {

  recipeForm!: FormGroup;

  isEditMode = false;

  recipeId?: number;

  currentRecipe?: Recipe;

  constructor(
    private fb: FormBuilder,
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.recipeForm = this.fb.group({

      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      category: [
        '',
        Validators.required
      ],

      image: [
        '',
        Validators.required
      ],

      duration: [
        30,
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      servings: [
        2,
        [
          Validators.required,
          Validators.min(1)
        ]
      ],

      difficulty: [
        'Orta',
        Validators.required
      ],

      tip: [''],

      instructions: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],

      ingredients: this.fb.array([
        this.fb.control('', Validators.required)
      ])

    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.isEditMode = true;

      this.recipeId = +id;

      this.currentRecipe =
        this.recipesService.getRecipe(this.recipeId);

      if (this.currentRecipe) {

        this.ingredientsFields.clear();

        this.currentRecipe.ingredients.forEach(item => {

          this.ingredientsFields.push(
            this.fb.control(item, Validators.required)
          );

        });

        this.recipeForm.patchValue({

          title: this.currentRecipe.title,

          category: this.currentRecipe.category,

          image: this.currentRecipe.image,

          duration: this.currentRecipe.duration,

          servings: this.currentRecipe.servings,

          difficulty: this.currentRecipe.difficulty,

          tip: this.currentRecipe.tip,

          instructions:
            this.currentRecipe.instructions.join('\n')

        });

      }

    }

  }

  get ingredientsFields(): FormArray {

    return this.recipeForm.get(
      'ingredients'
    ) as FormArray;

  }

  addIngredient(): void {

    this.ingredientsFields.push(

      this.fb.control(
        '',
        Validators.required
      )

    );

  }

  removeIngredient(index: number): void {

    if (this.ingredientsFields.length > 1) {

      this.ingredientsFields.removeAt(index);

    }

  }

  onImageSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    if (!input.files?.length) {

      return;

    }

    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {

      this.recipeForm.patchValue({

        image: reader.result as string

      });

    };

    reader.readAsDataURL(file);

  }

  onSubmit(): void {

    if (this.recipeForm.invalid) {

      this.recipeForm.markAllAsTouched();

      return;

    }

    const value = this.recipeForm.value;

    const recipe: Recipe = {

      id:
        this.isEditMode
          ? this.recipeId!
          : Date.now(),

      title: value.title,

      category: value.category,

      image: value.image,

      ingredients:
        value.ingredients
          .map((x: string) => x.trim())
          .filter((x: string) => x),

      instructions:
        value.instructions
          .split('\n')
          .map((x: string) => x.trim())
          .filter((x: string) => x),

      duration: Number(value.duration),

      servings: Number(value.servings),

      difficulty: value.difficulty,

      tip: value.tip,

      favorite:
        this.currentRecipe?.favorite ?? false,

      createdAt:
        this.currentRecipe?.createdAt ??
        new Date().toISOString()

    };

    if (this.isEditMode) {

      this.recipesService.updateRecipe(recipe);

    } else {

      this.recipesService.addRecipe(recipe);

    }

    this.router.navigate(['/recipes']);

  }

}