import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isPresent=true;

  toggleIsPresent(){
    this.isPresent = !this.isPresent;
  }
}
