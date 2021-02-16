import { Component } from '@angular/core';
import { Location } from '@angular/common'; 

@Component({
  selector: 'add-recipe',
  template: `
    <div class="row">
      <label for="recipe-name" class="sr-only">Recipe Name</label>
      <input id="recipe-name" class="stretch" type="text" placeholder="Recipe Name">
    </div>
    <div class="row">
      <span>Ingredients</span>
      <ingredient-modal></ingredient-modal>
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
        <ingredient-modal [buttonLabel]="'Edit'"></ingredient-modal>
        <button disabled>Delete</button>
      </div>
    </div>
    <div class="row">
      <span>Instructions (optional)</span>
      <instruction-modal></instruction-modal>
    </div>
    <div class="row">
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut..
      </span>
      <div class="row">
        <instruction-modal [buttonLabel]="'Edit'"></instruction-modal>
        <button disabled>Delete</button>
      </div>
    </div>
    <div class="row">
      <span>Cover Image (optional)</span>
      <button disabled>Plus</button>
    </div>
    <div class="row">
      <label for="book-name" class="sr-only">Book name</label>
      <input id="book-name" class="stretch" type="text" placeholder="Book name">
    </div>
    <div class="row">
      <label for="page-number" class="sr-only">Page number</label>
      <input id="page-number" class="stretch" type="text" placeholder="Page number">
    </div>
    <div class="row-right">
      <button (click)="goBack()">Cancel</button>
      <button (click)="goBack()">Save</button>
    </div>
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

  constructor(
    private location: Location,
  ){}

  goBack() {
    this.location.back();
  }
}
