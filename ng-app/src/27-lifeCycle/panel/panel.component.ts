import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  counter:number = 0;
  dates: Array<Date> = [new Date()];

  constructor() { 
    console.log("It is panel constructor");
    // component needs server data to be rendered
  } 

  ngOnInit() {
    console.log("It is panel ngOnInit");
    // ajax -> yes
    // this.customers = res.data.coustomer
  }

  ngOnDestroy(){
    console.log("It is panel destroyer")
  }

  update(){
    this.counter = this.counter + 5;
  }

  addDate(){
    this.dates.push(new Date())
  }
}
