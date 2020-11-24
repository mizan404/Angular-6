import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  public data;
  public getData() {
    this.data = [
      { id: 1, name: 'Mizan' }
    ];
    return this.data;
  }

  constructor() { }
}
