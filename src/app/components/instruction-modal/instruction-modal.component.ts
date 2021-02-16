import { Component, Input } from '@angular/core';

@Component({
  selector: 'instruction-modal',
  template: `
    <div class="">
      <button (click)="toggleModal()">{{ buttonLabel }}</button>

      <div [ngClass]="{ 'hide': !isOpen, 'show': isOpen }">
        <label id="instructiontName" class="grid">
          <span>Instruction</span>
          <textarea for="instructionName" placeholder="Instruction..." rows="5"></textarea>
        </label>
        <div class="row">
          <span>Image (optional)</span>
          <button disabled>Upload</button>
        </div>
        <div class="row-right">
          <button (click)="close()">Cancel</button>
          <button (click)="close()">{{ confirmLabel }}</button>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./instruction-modal.component.less']
})
export class InstructionModalComponent {
  @Input() buttonLabel = '+';
  @Input() confirmLabel = 'Add';
  
  isOpen = false;
  
  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }
}