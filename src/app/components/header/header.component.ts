import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header">
      <side-menu></side-menu>
      <button disabled>AvatarButton</button>
    </div>
  `,
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
}