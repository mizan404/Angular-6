import { TestService } from './test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public traineeData = [];
  constructor(private traineeservice: TestService) { }
  ngOnInit() {
    this.traineeData = this.traineeservice.getData();
  }
}
