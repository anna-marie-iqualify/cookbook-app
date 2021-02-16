import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddRecipeComponent } from './add-recipe.component';
import { IngredientModalModule } from '../../components/ingredient-modal/ingredient-modal.module'
import { InstructionModalModule } from '../../components/instruction-modal/instruction-modal.module'

@NgModule({
  declarations: [
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IngredientModalModule,
    InstructionModalModule,
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