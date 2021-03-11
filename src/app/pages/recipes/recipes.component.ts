import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';


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
  styleUrls: ['./recipes.component.less'],
  providers: [RecipesService]
})

export class RecipesComponent implements OnInit {
  data: any;

  constructor(
    private router: Router,
    private recipesService: RecipesService
  ){}

  ngOnInit() {
    this.recipesService.getRecipes()
    .subscribe((data) => {
      console.log(data)
    });
  }

  addRecipe() {
    this.router.navigateByUrl('/recipe/new');
  };
}
