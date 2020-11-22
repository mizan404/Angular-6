import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  public getData() {
    public data = [[1, 6, 3],
  [5, 2, 7],
  [9, 10, 11],];
return data; 
}

constructor() { }
}
