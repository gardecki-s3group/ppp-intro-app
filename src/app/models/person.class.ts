export class Person {
    id: number;
    firstName: string;
    lastName: string;
    gender: 'MALE' | 'FEMALE';
    dateOfBirth: Date;
    imageUrl: string | null;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        gender: 'MALE' | 'FEMALE',
        dateOfBirth: string,
        imageUrl: string | null
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = new Date(dateOfBirth);
        this.imageUrl = imageUrl;
    }
}
