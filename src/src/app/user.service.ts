import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url ="http://localhost:3000/users";
  constructor(private http : HttpClient) { }

  createUser(data){
    this.http.post(this.url, {
      name : data.name,
      mobile : data.mobile,
      email :data.email,
      password : data.password
    }).toPromise();
  }
  getUser(){
    return this.http.get(this.url)
  }
  updateUser(user){
   return this.http.put(this.url+'/' +user.id, user)
  }

  deleteUser(user){
   return this.http.delete(this.url+'/'+user.id);
  }
}
