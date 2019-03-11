import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log("It is home constructor")
      // component needs server data to be rendered
    } 

    ngOnInit() {
      console.log("It is home ngOnInit");
      // ajax -> yes
      // this.customers = res.data.coustomer
    }
  

  ngOnDestroy(){
    console.log("It is home destroyer")
  }

}
