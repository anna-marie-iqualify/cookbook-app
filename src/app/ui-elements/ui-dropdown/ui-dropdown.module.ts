import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UiDropdownComponent } from './ui-dropdown.component';

@NgModule({
  declarations: [
    UiDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    UiDropdownComponent
  ],
  exports: [
    UiDropdownComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class UiDropdownModule { }
