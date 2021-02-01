import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header></header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'appName';
}
