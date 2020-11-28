import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private logInfo: TestService, private router: Router) { }

  ngOnInit() {
  }
  userData;
  userStatus;
  logUser(data) {
    this.logInfo.logUser(data).subscribe(
      (response) => {
        this.userData = (response);
        for (let i = 0; i < this.userData.length; i++) {
          if (data.username == this.userData[i].username) {
            if (data.password == this.userData[i].password) {
              this.router.navigate(['/welcome']);
            }
            else {
              this.userStatus = "Not";
            }
          }
        }
      }
    )
  }
}
