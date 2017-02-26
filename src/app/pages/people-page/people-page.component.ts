import { Component } from '@angular/core';
import { Person } from "../../models/person.class";

@Component({
  selector: 'people-page',
  template: `
    <page-title title="People"></page-title>
    <page-body>
       <person-item [person]="examplePerson"></person-item>
    </page-body>
  `
})
export class PeoplePageComponent {

  examplePerson: Person = new Person(1, 'Jessica', 'Moore', 'FEMALE', '1985-12-29', 'http://www.npg.org.uk/assets/microsites/TWPPP2015/images/800_2015_1481new.jpg');

}
