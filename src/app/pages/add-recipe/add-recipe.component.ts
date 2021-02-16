import { Component } from '@angular/core';
import { Location } from '@angular/common'; 
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'add-recipe',
  template: `
    <form [formGroup]="recipeForm">
      <div class="row">
        <label for="recipe-name" class="sr-only">Recipe Name</label>
        <input id="recipe-name" class="stretch" type="text" placeholder="Recipe Name" formControlName="name">
      </div>
      <div class="row">
        <span>Ingredients</span>
        <ingredient-modal 
          (callback)="updateIngredient($event)"
        ></ingredient-modal>
      </div>
      <div class="row">
        <div></div>
        <div>qty</div>
        <div></div>
      </div>
      <div class="row">
        <span>Ingredient name</span>
        <span>1 tbsp</span>
        <div class="row">
          <ingredient-modal
            [buttonLabel]="'Edit'"
            [confirmLabel]="'Update'"
          ></ingredient-modal>
          <button disabled>Delete</button>
        </div>
      </div>
      <div class="row">
        <span>Instructions (optional)</span>
        <instruction-modal 
          (callback)="updateInstruction($event)"
        ></instruction-modal>
      </div>
      <div class="row">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut..
        </span>
        <div class="row">
          <instruction-modal 
            [buttonLabel]="'Edit'"
            [confirmLabel]="'Update'"
          ></instruction-modal>
          <button disabled>Delete</button>
        </div>
      </div>
      <div class="row">
        <span>Cover Image (optional)</span>
        <button disabled>Plus</button>
      </div>
      <div class="row">
        <label for="book-name" class="sr-only">Book name (optional)</label>
        <input id="book-name" class="stretch" type="text" placeholder="Book name (optional)" formControlName="bookName">
      </div>
      <div class="row">
        <label for="page-number" class="sr-only">Page number (optional)</label>
        <input id="page-number" class="stretch" type="text" placeholder="Page number (optional)" formControlName="page">
      </div>
      <div class="row-right">
        <button (click)="goBack()">Cancel</button>
        <button (click)="onSubmit()">Save</button>
      </div>
    </form>
  `,
  styleUrls: ['./add-recipe.component.less']
})

export class AddRecipeComponent {
  recipeName = '';
  ingredients = [
    {}
  ];
  instructions = [];
  coverImage = '';
  bookName = '';
  pageNumber = '';

  recipeForm = new FormGroup({
    name: new FormControl(''),
    ingredients: new FormControl([]),
    instructions: new FormControl([]),
    coverImage: new FormControl(''),
    bookName: new FormControl(''),
    page: new FormControl('')
  });

  constructor(
    private location: Location,
  ){}

  goBack() {
    this.location.back();
  }

  updateIngredient(ingredient: any) {
    const ingredients = this.recipeForm.value.ingredients;
    const newIngredienets = ingredients.concat([ingredient]);
    (this.recipeForm.controls['ingredients'] as FormControl).setValue(newIngredienets)
  }

  updateInstruction(instruction: any) {
    const instructions = this.recipeForm.value.instructions;
    const newInstructions = instructions.concat([instruction]);
    (this.recipeForm.controls['instructions'] as FormControl).setValue(newInstructions)
  }

  onSubmit() {
    console.log(this.recipeForm.value)
  }
}
