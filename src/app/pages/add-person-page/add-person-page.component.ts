import { Component } from '@angular/core';
import { PersonDataService } from "../../services/person-data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'add-person-page',
  template: `
    <page-title title="Add Person"></page-title>
    <page-body>
        <person-form (onSubmit)="addPerson($event)"></person-form>
    </page-body>
  `
})
export class AddPersonPageComponent {

  constructor(private pds: PersonDataService, private router: Router) { }

  addPerson(personData) {
    this.pds.addPerson(personData);
    this.router.navigate(['/people']);
  }

}
