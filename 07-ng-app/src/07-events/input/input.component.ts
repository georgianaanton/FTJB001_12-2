import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  // name = '';
  isPresent:boolean = true;
  age: number = 18;
  constructor() { 
    // let a: string = "abc";
    // let b: number = 123;
    // a = b;
  }

  ngOnInit() {
  }

  getCurrentAge(ageBox:any){
    console.log(typeof this.age);
    this.age = ageBox.value;
    console.log(typeof this.age);
    console.log("Age is : "+this.age);
  }

}
