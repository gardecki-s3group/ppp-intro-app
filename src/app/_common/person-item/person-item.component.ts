import { Component, OnInit, Input } from '@angular/core';
import { Person } from "../../models/person.class";

@Component({
  selector: 'person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss']
})
export class PersonItemComponent {

  @Input() person: Person;

}
