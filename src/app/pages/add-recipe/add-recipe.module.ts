import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddRecipeComponent } from './add-recipe.component';

@NgModule({
  declarations: [
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AddRecipeComponent
  ],
  exports: [
    AddRecipeComponent
  ]
})
export class AddRecipeModule { }