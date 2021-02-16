import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IngredientModalComponent } from './ingredient-modal.component';

@NgModule({
  declarations: [
    IngredientModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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