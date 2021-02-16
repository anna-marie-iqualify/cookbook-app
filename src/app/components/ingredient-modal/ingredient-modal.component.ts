import { Component, Input } from '@angular/core';

@Component({
  selector: 'ingredient-modal',
  template: `
    <div class="">
      <button (click)="toggleModal()">{{ buttonLabel }}</button>

      <div [ngClass]="{ 'hide': !isOpen, 'show': isOpen }">
        <label id="ingredientName" class="grid">
          <span>Ingredient</span>
          <input for="ingredientName" placeholder="Select ingredient">
        </label>
        <div class="row">
          <label id="measurement" class="grid">
            <span>Measurement</span>
            <input for="measurement" placeholder="123">
          </label>
          <label id="measurementUnit" class="grid">
            <span>Unit</span>
            <input for="measurementUnit" placeholder="Unit">
          </label>
        </div>
        <div class="row-right">
          <button (click)="close()">Cancel</button>
          <button (click)="close()">Save</button>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./ingredient-modal.component.less']
})
export class IngredientModalComponent {
  @Input() buttonLabel = '+';
  
  isOpen = false;
  
  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }
}