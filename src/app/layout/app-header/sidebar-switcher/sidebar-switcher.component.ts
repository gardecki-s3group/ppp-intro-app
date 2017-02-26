import {Component, HostListener} from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
    selector: 'sidebar-switcher',
    templateUrl: 'sidebar-switcher.component.html',
    styleUrls: ['sidebar-switcher.component.scss']
})
export class SidebarSwitcherComponent {

    constructor(private _appRoot: AppComponent) {}

    @HostListener('click')
    toggle() {
        this._appRoot.toggleSidebar();
    }


}