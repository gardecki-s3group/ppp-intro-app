import { Component } from '@angular/core';
import { Person } from "../../models/person.class";
import { PersonDataService } from "../../services/person-data.service";

@Component({
  selector: 'people-page',
  template: `
    <page-title title="People"></page-title>
    <page-body>
       <person-list [people]="examplePeople"></person-list>
    </page-body>
  `
})
export class PeoplePageComponent {

  examplePeople: Person[];

  constructor(pds: PersonDataService) {
    this.examplePeople = pds.getPeople();
  }

}
