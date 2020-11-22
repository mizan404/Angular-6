import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  constructor() { }
  public data;
  public getTrainees(){
    this.data = [
      {id: 1, name: 'A'},
      {id: 2, name: 'B'},
      {id: 3, name: 'C'},
      {id: 4, name: 'D'}
    ]
    return this.data;
  }
}
