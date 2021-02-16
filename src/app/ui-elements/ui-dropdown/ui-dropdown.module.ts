import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiDropdownComponent } from './ui-dropdown.component';

@NgModule({
  declarations: [
    UiDropdownComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    UiDropdownComponent
  ],
  exports: [
    UiDropdownComponent
  ]
})

export class UiDropdownModule { }
