import { Component, Input } from '@angular/core';
import { Person } from "../../models/person.class";

@Component({
  selector: 'person-list',
  template: `<person-item *ngFor="let p of people" [person]="p"></person-item>`
})
export class PersonListComponent {

  @Input() people: Person[];

}
