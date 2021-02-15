import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header">
      <button>hamburger</button>
      <button>AvatarButton</button>
    </div>
  `,
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
}