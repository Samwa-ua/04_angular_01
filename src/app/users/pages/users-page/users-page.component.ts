import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/User';
import { ApicallService } from '../../services/apicall.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users: IUser[] = [];
  checkedArr: number[] = [];
  currentStatus!: boolean;
  searchText: string = '';

  constructor(private apiFetchUsers: ApicallService) {}

  fetchUsers() {
    this.apiFetchUsers.getUsers().subscribe((data) => {
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
    this.toggleStatus();
    if (checked) {
      {
        this.checkedArr.push(id);
      }
    } else {
      this.checkedArr = this.checkedArr.filter((el) => el !== id);
    }
  }

  remove(...id: number[]) {
    this.users = this.users.filter((user) => !id.includes(user.id));
    return this.users;
  }

  onDelete() {
    this.remove(...this.checkedArr);
    this.toggleStatus();
  }

  onSearch(searchValue: string) {
    this.searchText = searchValue;
  }
  onSort(ascending: boolean) {
    this.users.sort((a, b) => {
      let itemA = a.firstname;
      let itemB = b.firstname;

      let sortDirection = 1;
      if (!ascending) {
        sortDirection = -1;
      }
      if (itemA < itemB) {
        return -1 * sortDirection;
      } else if (itemA > itemB) {
        return 1 * sortDirection;
      } else {
        return 0 * sortDirection;
      }
    });
  }

  onAddUser(receivedUser: IUser) {
    this.users.push(receivedUser);
  }
}
