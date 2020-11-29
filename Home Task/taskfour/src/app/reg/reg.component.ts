import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private regUser: TestService) { }

  ngOnInit() {
  }
  regSubmit(data) {
    this.regUser.regSubmit(data);
  }
}
