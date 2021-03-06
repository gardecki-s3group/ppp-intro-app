import { Injectable } from '@angular/core';
import { Person } from "../models/person.class";

@Injectable()
export class PersonDataService {

    private _people: Person[] = [
        new Person(1, 'Jessica', 'Moore', 'FEMALE', '1985-12-29', 'http://www.npg.org.uk/assets/microsites/TWPPP2015/images/800_2015_1481new.jpg'),
        new Person(2, 'Natalie', 'Stevens', 'FEMALE', '1995-06-11', 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2015/09/15/16/red-convention-getty.jpg'),
        new Person(3, 'Stephen', 'Hawking', 'MALE', '1942-01-08', 'http://www.trueactivist.com/wp-content/uploads/2016/04/sh.jpg'),
        new Person(4, 'Suraj', 'Shaorma', 'MALE', '1978-04-12', 'https://s-media-cache-ak0.pinimg.com/736x/4f/87/21/4f8721e3f9eeb6a215c19965f0c37397.jpg'),
    ];

    getPeople() {
        return this._people;
    }

    addPerson(data) {
        let newId = Math.max(...this._people.map(p => p.id)) + 1;
        this._people.push(
            new Person(newId, data.firstName, data.lastName, data.gender, data.dateOfBirth, data.imageUrl)
        )
    }

}