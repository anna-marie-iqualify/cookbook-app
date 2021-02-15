import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'recipes',
  template: `
    <div class="">
      <div class="add-recipe">
        <span>Recipes</span>
        <button (click)="addRecipe()">+</button>
      </div>
      <div>
        <input placeholder="search">
      </div>
    </div>
  `,
  styleUrls: ['./recipes.component.less']
})

export class RecipesComponent {
  constructor(private router: Router){}

  addRecipe() {
    this.router.navigateByUrl('/recipe/new');
  };
}
