import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibraryComponent } from './library.component';


@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    LibraryComponent
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }