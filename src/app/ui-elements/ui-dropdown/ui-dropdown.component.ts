import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-dropdown',
  template: `
    <div class="container">
      <div class="row">
        <label for="search-dropdown" class="row stretch">
          <span class="sr-only">{{label}}</span>
          <input 
          id="search-dropdown" 
          class="stretch" 
          type="text" 
          (click)="toggleOpen()"
          [placeholder]="placeholder" 
          [(ngModel)]="input" 
          (input)="filterOptions()">
        </label>
      </div>
      
      <ul class="dropdown-list" [ngClass]="{ 'hide': !isOpen, 'show': isOpen }">
        <div *ngFor="let option of filterdOptions; let i = index">
          <li>
            <button class="stretch" (click)="selectOption(option)">{{ option.name }}</button>
          </li>
        </div>
        <li *ngIf="!isInList()" class="row">
          <span>{{ input }}</span><button (click)="onAdd()">+</button>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./ui-dropdown.component.less']
})

export class UiDropdownComponent implements OnInit {
  @Input() label = 'Search and select';
  @Input() placeholder = 'Search';
  @Input() options : { _id: any, name: string }[] = [];
  @Output() callback = new EventEmitter();

  isOpen = false;
  input: any;
  filterdOptions : { _id: any, name: string }[] = [];

  ngOnInit() {
    if (this.filterdOptions.length === 0) {
      this.filterdOptions = this.options;
    }
  }

  filterOptions() {
    if(!this.isOpen) {
      this.isOpen = true;
    }
    this.filterdOptions = this.options.filter(
      item => item.name.toLowerCase().includes(this.input.toLowerCase())
    );
  }

  selectOption(option: any) {
    this.input = option.name;
    this.callback.emit(option);
    this.isOpen = false;
  }

  isInList() {
    if(!this.input) {
      return true;
    }
    return this.options.find(option => {
     return option.name.toLowerCase() === this.input.toLowerCase();
    })
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  onAdd() {
    this.callback.emit({ name: this.input });
    this.isOpen = false;
  }
}