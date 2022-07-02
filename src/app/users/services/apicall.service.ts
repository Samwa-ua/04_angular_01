import { HttpClient } from '@angular/common/http';
import { Call } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  private baseURl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseURl);
  }
  public addUser(user: IUser) {
    return this.http.post(this.baseURl, user);
  }
  public deleteUser(user: IUser) {
    return this.http.delete(this.baseURl + user);
  }
}
