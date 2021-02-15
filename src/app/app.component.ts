import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <header></header>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'appName';
}
