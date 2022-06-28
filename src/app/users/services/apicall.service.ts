import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../interfaces/Users';

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      console.log(data);
    });
  }

  public getJSON(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>('../assets/MOCK_DATA.json');
  }
}
