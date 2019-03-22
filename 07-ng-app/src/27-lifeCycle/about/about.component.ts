import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html', 
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log("It is about constructor")
      // component needs server data to be rendered
    } 

    ngOnInit() {
      console.log("It is about ngOnInit");
      // ajax -> yes
      // this.customers = res.data.coustomer
    }
  

  ngOnDestroy(){
    console.log("It is about destroyer")
  }
}
