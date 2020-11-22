import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
public data; 
public getData(){
this.data=[
  {id: 1, name: 'Muhammad Mizanur Rahman'},
  {id: 2, name: 'Rizvey Khan Zaman'},
  {id: 3, name: 'Maria Jannat'},
  {id: 4, name: 'Sanny'},
  {id: 5, name: 'Bari'},
  {id: 6, name: 'Rasel khan aka coder'}
]
return this.data; 




}
  constructor() { }
}
