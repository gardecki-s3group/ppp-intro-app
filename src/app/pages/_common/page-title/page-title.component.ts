import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  template: `
    <h1>{{title}}</h1>
`,
  styleUrls: ['page-title.component.scss']
})
export class PageTitleComponent {

  @Input() title;

}
