import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IngredientModalComponent } from './ingredient-modal.component';
import { UiDropdownModule } from '../../ui-elements/ui-dropdown/ui-dropdown.module';

@NgModule({
  declarations: [
    IngredientModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UiDropdownModule,
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