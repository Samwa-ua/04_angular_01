import { Component, Input } from '@angular/core';
import { IUsers } from 'src/app/users/interfaces/Users';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() users: IUsers;

  constructor() {
    this.users = {
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    };
  }
}
