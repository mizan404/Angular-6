import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private userService: TestService) { }
  userData;
  ngOnInit() {
  }
  logUser(data) {
    this.userService.logUser(data).subscribe(
      (response) => {
        this.userData = response;
        for(let i =0; i<this.userData.length; i++){
          if(data.username==this.userData[i].username){
            if(data.password==this.userData[i].password){
              
            }
          }
        }
      },
      (error) => { }
    )
  }


}
