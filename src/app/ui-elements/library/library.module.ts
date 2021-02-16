import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibraryComponent } from './library.component';
import { UiDropdownModule } from '../ui-dropdown/ui-dropdown.module';

@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    UiDropdownModule,
  ],
  providers: [],
  bootstrap: [
    LibraryComponent
  ],
  exports: [
    LibraryComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LibraryModule { }