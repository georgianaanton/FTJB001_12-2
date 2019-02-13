import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name:string = "abc";
  age:number = 28;
  constructor() { }

  ngOnInit() {
  }

  changeName(name){
    this.name = name;
  }
  changeAge(age){
    this.age = age;
  }
  handleChangePNameInParentComp(arg){
    console.log("change in parent")
    this.name = arg;
  }


}
