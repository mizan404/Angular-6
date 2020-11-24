import { TestService } from './test.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public data;
  constructor(private traineeData: TestService) { }

  ngOnInit() {
    this.traineeData.getPosts().subscribe(
      (response) => this.data = response
    )


  }
}
