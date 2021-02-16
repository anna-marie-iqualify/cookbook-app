import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'instruction-modal',
  template: `
    <form [formGroup]="instructionForm">
      <button (click)="toggleModal()">{{ buttonLabel }}</button>

      <div [ngClass]="{ 'hide': !isOpen, 'show': isOpen }">
        <label id="description" class="grid">
          <span>Instruction</span>
          <textarea for="description" placeholder="Instruction..." rows="5" formControlName="description"></textarea>
        </label>
        <div class="row">
          <span>Image (optional)</span>
          <button disabled>Upload</button>
        </div>
        <div class="row-right">
          <button (click)="close()">Cancel</button>
          <button (click)="onSubmit()">{{ confirmLabel }}</button>
        </div>
      </div>
  </form>
  `,
  styleUrls: ['./instruction-modal.component.less']
})
export class InstructionModalComponent {
  @Input() buttonLabel = '+';
  @Input() confirmLabel = 'Add';
  @Output() callback = new EventEmitter();

  instructionForm = new FormGroup({
    description: new FormControl(''),
    image: new FormControl(''),
  });
  
  isOpen = false;
  
  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }

  onSubmit() {
    this.callback.emit(this.instructionForm.value)
    this.isOpen = false;
  }
}