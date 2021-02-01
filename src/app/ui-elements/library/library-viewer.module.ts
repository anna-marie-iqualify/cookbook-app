import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibraryViewerComponent } from './library-viewer.component';

@NgModule({
  declarations: [
    LibraryViewerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    LibraryViewerComponent
  ],
  exports: [
    LibraryViewerComponent
  ]
})
export class LibraryViewerModule { }