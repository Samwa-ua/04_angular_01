import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUsers } from 'src/app/users/interfaces/Users';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() users: IUsers;
  @Input() checked = false;
  @Output() check = new EventEmitter<boolean>();

  constructor() {
    this.users = {
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    };
  }

  onCheck() {
    this.check.emit(this.checked);
  }
}
