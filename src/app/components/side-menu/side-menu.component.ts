import { Component } from '@angular/core';

@Component({
  selector: 'side-menu',
  template: `
    <div>
      <button (click)="toggleNav()">
        <div class="hamburger"></div>
        <div  class="hamburger"></div>
        <div  class="hamburger"></div>
      </button>
      <nav [ngClass]="{ 'hide': !showNav, 'show': showNav }">
        <div class="close">
          <button (click)="toggleNav()" >X</button>
        </div>
        
        <div class="menu">
          <div>Planners</div>
          <a [routerLink]="['/recipes']" (click)="toggleNav()">Recipes</a>
          <div>Pantry</div>
          <div>Shopping list</div>
        </div>
      </nav>
    </div>
  `,
  styleUrls: ['./side-menu.component.less']
})

export class SideMenuComponent {
  showNav = false;

  toggleNav() {
    this.showNav = !this.showNav;
  }
}
