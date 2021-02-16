import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IngredientModalComponent } from './ingredient-modal.component';

@NgModule({
  declarations: [
    IngredientModalComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    IngredientModalComponent
  ],
  exports: [
    IngredientModalComponent
  ]
})
export class IngredientModalModule { }