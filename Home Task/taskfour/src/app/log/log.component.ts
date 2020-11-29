import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private logUser: TestService, private router: Router) { }

  ngOnInit() {
  }

  userData;
  userStatus;
  logSubmit(data) {
    this.logUser.logSubmit(data).subscribe(
      (response) => {
        this.userData = response;
        for (let i = 0; i < this.userData.length; i++) {
          if (data.username == this.userData[i].username) {
            this.router.navigate(['/welcome']);
            if (data.password == this.userData[i].password) {
              this.userStatus = "Username or Password doesn't match!";
            }
          }
        }
      }
    )


  }
}
