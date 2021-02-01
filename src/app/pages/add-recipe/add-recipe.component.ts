import { Component } from '@angular/core';

@Component({
  selector: 'add-recipe',
  template: `
    <div>
      <input type="text" [(ngModel)]="recipeTitle">
    </div>
  `,
  styleUrls: ['./add-recipe.component.less']
})
export class AddRecipeComponent {
  recipeTitle = '';

}
