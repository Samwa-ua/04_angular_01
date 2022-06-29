import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../../interfaces/Users';
import { ApicallService } from '../../services/apicall.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users: IUsers[] = [];

  constructor(private apiFetchUsers: ApicallService) {}

  ngOnInit() {
    this.apiFetchUsers.getJSON().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
}
