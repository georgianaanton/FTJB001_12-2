import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  constructor(){
    console.log("It is AppComponent constructor")
  }
  ngOnDestroy(){
    console.log("It is AppComponent destroyer")
  }
}
