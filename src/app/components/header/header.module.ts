import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { SideMenuModule } from '../side-menu/side-menu.module'

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SideMenuModule,
  ],
  providers: [],
  bootstrap: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }