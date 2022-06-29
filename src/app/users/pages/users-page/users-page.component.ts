import { Component, OnInit } from '@angular/core';
import { IUsers } from '../../interfaces/Users';
import { ApicallService } from '../../services/apicall.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users: IUsers[] = [];
  checkedArr: number[] = [];
  currentStatus: boolean = false;

  constructor(private apiFetchUsers: ApicallService) {}

  fetchUsers() {
    this.apiFetchUsers.getJSON().subscribe((data) => {
      this.users = data;
    });
  }
  ngOnInit() {
    this.fetchUsers();
  }
  toggleStatus() {
    this.currentStatus = !this.currentStatus;
  }

  onSelectAll() {
    if (this.checkedArr.length === this.users.length) {
      this.toggleStatus();
      this.checkedArr = [];
    } else {
      this.checkedArr = this.users.map((el) => el.id);
      this.toggleStatus();
    }
  }

  onCheck(id: number, checked: boolean) {
    if (checked) {
      {
        this.checkedArr.push(id);
      }
    } else {
      this.checkedArr = this.checkedArr.filter((el) => el !== id);
    }
  }
}
