import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ingredient-modal',
  template: `
    <form [formGroup]="ingredientForm">
      <button (click)="toggleModal()">{{ buttonLabel }}</button>

      <div [ngClass]="{ 'hide': !isOpen, 'show': isOpen }">
        <div class="grid">
          <span>Ingredient</span>
          <ui-dropdown
            [label]="'Ingredient'"
            [placeholder]="'Select ingredient'"
            [options]="ingredients"
            (callback)="getIngredient($event)"
          ></ui-dropdown>
        </div>
        <div class="row">
          <label id="measurement" class="grid">
            <span>Measurement</span>
            <input for="measurement" placeholder="123" formControlName="measurement">
          </label>
          <label id="measurementUnit" class="grid">
            <span>Unit</span>
            <input for="measurementUnit" placeholder="Unit" formControlName="unit">
          </label>
        </div>
        <div class="row-right">
          <button (click)="close()">Cancel</button>
          <button (click)="onSubmit()">{{ confirmLabel }}</button>
        </div>
      </div>
    </form>
  `,
  styleUrls: ['./ingredient-modal.component.less']
})
export class IngredientModalComponent {
  @Input() buttonLabel = '+';
  @Input() confirmLabel = 'Add';
  @Output() callback = new EventEmitter();

  ingredientForm = new FormGroup({
    name: new FormControl(''),
    measurement: new FormControl(''),
    unit: new FormControl(''),
  });
  
  isOpen = false;
  
  ingredients = [
    {_id: 1, name: 'Butter'},
    {_id: 2, name: 'Onions'},
    {_id: 3, name: 'Mushrooms'},
    {_id: 4, name: 'Salt'},
    {_id: 5, name: 'Water'},
    {_id: 6, name: 'Bread'},
  ];

  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }

  getIngredient(option: any) {
    (this.ingredientForm.controls['name'] as FormControl).setValue(option.name)
  }

  onSubmit() {
    this.callback.emit(this.ingredientForm.value);
    this.isOpen = false;
  }
}