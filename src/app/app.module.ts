import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { Ng2DatetimePickerModule } from "ng2-datetime-picker";

import { AppComponent } from './app.component';
import { AppHeaderComponent } from "./layout/app-header/app-header.component";
import { AppSidebarComponent } from "./layout/app-sidebar/app-sidebar.component";
import { AppContentComponent } from "./layout/app-content/app-content.component";
import { SidebarSwitcherComponent } from "./layout/app-header/sidebar-switcher/sidebar-switcher.component";
import { PageTitleComponent } from "./pages/_common/page-title/page-title.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AddPersonPageComponent } from "./pages/add-person-page/add-person-page.component";
import { PeoplePageComponent } from "./pages/people-page/people-page.component";
import { PageBodyComponent } from "./pages/_common/page-body/page-body.component";
import { PersonFormComponent } from "./_common/person-form/person-form.component";
import { routing } from "./app.routing";
import { PersonItemComponent } from "./_common/person-item/person-item.component";
import { AgePipe } from "./pipes/age.pipe";

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppSidebarComponent,
        AppContentComponent,
        SidebarSwitcherComponent,
        PageTitleComponent,
        PageBodyComponent,
        HomePageComponent,
        AddPersonPageComponent,
        PeoplePageComponent,
        PersonFormComponent,
        PersonItemComponent,
        AgePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Angular2FontawesomeModule,
        Ng2DatetimePickerModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
