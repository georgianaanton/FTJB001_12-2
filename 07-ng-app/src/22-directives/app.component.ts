import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myClass='red';
  isPresent=true;
  myClassObj = {'red':this.isPresent};
  myStyleObj = {
    "border":"5px solid black",
    "border-radius":"10px 20px",
    "text-align":"right"
  }
  toss;
  exp = 5;

  empList=[
    {empId:120, empName:'mark', empAge: 32},
    {empId:214, empName:'carl', empAge: 25},
    {empId:126, empName:'tom', empAge: 23}
  ];

  toggleIsPresent(){
    this.isPresent = !this.isPresent;
    this.myClassObj = {'red':this.isPresent};
    this.toss = this.isPresent ? 'tail': 'head';
  }

  log(){
    console.log("button is clicked")
  }
}
