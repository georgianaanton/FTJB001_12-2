import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input("name") 
  pName:string;

  @Input() pAge:number;
  @Input() pAddress:string;

  @Output()
  pEvent:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changePName(name){
    this.pEvent.next({name: name, age: 33});
  }

}
