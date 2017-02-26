import { Component } from '@angular/core';
import { Person } from "../../models/person.class";

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

  examplePeople:  Person[] = [
    new Person(1, 'Jessica', 'Moore', 'FEMALE', '1985-12-29', 'http://www.npg.org.uk/assets/microsites/TWPPP2015/images/800_2015_1481new.jpg'),
    new Person(2, 'Natalie', 'Stevens', 'FEMALE', '1995-06-11', 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2015/09/15/16/red-convention-getty.jpg'),
    new Person(3, 'Stephen', 'Hawking', 'MALE', '1942-01-08', 'http://www.trueactivist.com/wp-content/uploads/2016/04/sh.jpg'),
    new Person(4, 'Suraj', 'Shaorma', 'MALE', '1978-04-12', 'https://s-media-cache-ak0.pinimg.com/736x/4f/87/21/4f8721e3f9eeb6a215c19965f0c37397.jpg'),
  ];

}
