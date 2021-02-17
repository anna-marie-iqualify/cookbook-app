import { Component } from '@angular/core';

@Component({
  selector: 'library',
  template: `
    <div>
      <h1>Labrary elements</h1>
      <div>
        <h2>ui-dropdown</h2>
        <ui-dropdown
          [label]="'Hallo'"
          [placeholder]="'search something'"
          [options]="dropdownOptions"
          (callback)="dropdown($event)"
        ></ui-dropdown>
        <pre>
          <code>{{ dropdownResult | json }}</code>
        </pre>
      </div>
    </div>
  `,
  styleUrls: ['./library.component.less']
})
export class LibraryComponent {
  dropdownOptions = [
    {_id: 1, name: 'Butter'},
    {_id: 2, name: 'Onions'},
    {_id: 3, name: 'Mushrooms'},
    {_id: 4, name: 'Salt'},
    {_id: 5, name: 'Water'},
    {_id: 6, name: 'Bread'},
  ];
  dropdownResult: any;

  dropdown(result: any) {
    this.dropdownResult = result
  }
  
}