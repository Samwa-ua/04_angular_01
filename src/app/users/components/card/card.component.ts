import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/users/interfaces/Users';
import { ApicallService } from 'src/app/users/services/apicall.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  users: IUsers[] = [];

  constructor(private apiFetchUsers: ApicallService) {}

  ngOnInit() {
    this.apiFetchUsers.getJSON().subscribe((data) => {
      this.users = data;
    });
  }
}
