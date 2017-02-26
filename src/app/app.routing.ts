import { Route, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PeoplePageComponent } from "./pages/people-page/people-page.component";
import { AddPersonPageComponent } from "./pages/add-person-page/add-person-page.component";
import { ModuleWithProviders } from "@angular/core";

const routes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'people', component: PeoplePageComponent },
    { path: 'add-person', component: AddPersonPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);