import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private welcomeUser: TestService) { }

  ngOnInit() {
  }
  userData;

  logSubmit(data) {
    this.welcomeUser.logSubmit(data).subscribe(
      (response) => this.userData = response)

  }

}
