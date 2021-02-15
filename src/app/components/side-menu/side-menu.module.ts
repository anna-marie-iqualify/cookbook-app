import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SideMenuComponent } from './side-menu.component';
import { AppRoutingModule } from '../../app-routing.module'

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    SideMenuComponent
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }