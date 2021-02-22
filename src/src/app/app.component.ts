import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
allData;

userObj = {
  name : '',
  mobile : '',
  email : '',
  password : ''
}
  massege;
  title = 'app';
  constructor(private userService : UserService){}
  ngOnInit(): void {
    this.getData();

   
  }

  createUser(data){
    this.userService.createUser(data);
	this.massege="Data Added Successfully";
  }
getData(){
	this.userService.getUser().subscribe((response) => {
    this.allData = response;
  })
}

deleteUser(data){
	this.userService.deleteUser(data).subscribe(()=> {
    this.getData();
  })
}

editUser(user){
  this.userObj = user;
}

updateUser(){
  this.userService.updateUser(this.userObj).subscribe(()=>{
    this.getData();
  })
}


}
