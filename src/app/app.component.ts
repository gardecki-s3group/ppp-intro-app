import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-sidebar></app-sidebar>
    <app-header></app-header>
    <app-content></app-content>
  `
})
export class AppComponent {

  @HostBinding('class.sidebar-closed')
  isSidebarClosed: boolean = true;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

}
