import { Component } from '@angular/core';

@Component({
  selector: 'library',
  template: `
    <div>
      <h1>Labrary elements</h1>
      <div>
        <h2>ui-dropdown</h2>
        <ui-dropdown></ui-dropdown>
      </div>
    </div>
  `,
  styleUrls: ['./library.component.less']
})
export class LibraryComponent {
  dropdowns = [];
  
}