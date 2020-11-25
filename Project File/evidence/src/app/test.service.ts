import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = "http://localhost:3000/posts";
  constructor(private http: HttpClient) { }
  public getPosts() {
    return this.http.get(this.url);
  }
}
