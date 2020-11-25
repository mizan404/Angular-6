import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  // public getPosts() {
  //   return this.http.get(this.url);// to get data from view 
  // }
  // public userData;


  // public postData(data) {
  //   console.log(data.password);// to pass data into service

  //   this.userData = {
  //     title: data.username,
  //     author: data.password
  //   };
  //   this.http.post(this.url, this.userData).toPromise(); // .then() method 
  // }
  regUser(data) {
    this.http.post(this.url, {
      name: data.name,
      username: data.username,
      password: data.password
    }).toPromise;

  }
  logUser(data) {
    return this.http.get(this.url);
  }

}
