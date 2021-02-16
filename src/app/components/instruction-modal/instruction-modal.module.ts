import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InstructionModalComponent } from './instruction-modal.component';

@NgModule({
  declarations: [
    InstructionModalComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    InstructionModalComponent
  ],
  exports: [
    InstructionModalComponent
  ]
})
export class InstructionModalModule { }