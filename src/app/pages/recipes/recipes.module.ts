import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module'

import { RecipesComponent } from './recipes.component'

@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    RecipesComponent,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    RecipesComponent
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipesModule { }