import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // secondData = " ";
  // isTrue = "true";
public servData =[]; 
public serv:test-service = new test-Service(); 

  constructor() { }

  ngOnInit() {
  }

}
