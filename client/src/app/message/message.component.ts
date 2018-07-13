import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <ngb-alert [type]="type" [dismissible]="false" >
      {{ message }}
    </ngb-alert>`
})
export class MessageComponent  {

  @Input() message;
  @Input() type;
  constructor() { }

}
