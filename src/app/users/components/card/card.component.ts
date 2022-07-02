import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/users/interfaces/User';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() users: IUser;
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
