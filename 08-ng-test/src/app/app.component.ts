import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num:number = 2;
  title = "Hello Angular Testing";

  changeTitle(){
    console.log("btn clicked")
    this.title = "Welcome Angular Testing";
  }

  myLog(arg?:any){
    console.log("My Log : ", arg);
  }

}
