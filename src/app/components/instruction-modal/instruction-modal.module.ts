import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InstructionModalComponent } from './instruction-modal.component';

@NgModule({
  declarations: [
    InstructionModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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