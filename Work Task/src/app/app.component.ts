import { Component } from '@angular/core';
import { TraineeService } from './trainee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public traineeData =[];
  constructor(private traineeService: TraineeService){}

  ngOnInit(){
    this.traineeData = this.traineeService.getTrainees();
  }
}
