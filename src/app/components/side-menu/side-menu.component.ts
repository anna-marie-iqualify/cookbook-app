import { Component } from '@angular/core';

@Component({
  selector: 'side-menu',
  template: `
    <div>
      <button (click)="toggleNav()">hamburger</button>
      <nav [ngClass]="{ 'hide': !showNav, 'show': showNav }">
        <div class="close">
          <button (click)="toggleNav()" >X</button>
        </div>
        
        <div class="menu">
          <a [routerLink]="['/']" (click)="toggleNav()">home</a>
          <a [routerLink]="['/recipe/new']" (click)="toggleNav()">Create recipe</a>
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
    console.log(this.showNav)
  }
}
