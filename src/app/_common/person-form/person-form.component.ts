import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  submitForm(formData) {
    this.onSubmit.emit(formData);
  }
  
}
