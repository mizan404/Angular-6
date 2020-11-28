import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = " http://localhost:3000/posts";
  constructor(private http: HttpClient) { }

  regUser(data) {
    this.http.post(this.url, {
      name: data.name,
      username: data.username,
      password: data.password

    }).toPromise();
  }


  logUser(data) {
    return this.http.get(this.url);
  }

}
