import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My app';
  invalid: boolean = false;
  name:string = "Shanmugapriyan Vijayarangan";

  submit(){
    console.log("We can submit data if it is valid");
  }
  reverse(){
    this.invalid = !this.invalid;
  }
  changeName(name){
    this.name = name;
  }
}
