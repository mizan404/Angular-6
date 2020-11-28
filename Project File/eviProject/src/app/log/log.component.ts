import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private userData: TestService) { }

  ngOnInit() {
  }
  userInfo;
  userStatus;
  logSubmit(data) {
    this.userData.logSubmit(data).subscribe(
      (response) => {
        this.userInfo = response;
        for (let i = 0; i < this.userInfo.length; i++) {
          if (data.username == this.userInfo[i].username) {
            if (data.password == this.userInfo[i].password) {
              this.userStatus = "SSSSSSSSS";
            }
            else {
              this.userStatus = "NNNNNNN";
            }
          }
        }

      }
    )

  }
}
