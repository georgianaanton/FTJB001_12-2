import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notificationCount:number = 0;
  inboxCount:number = 5;
  increaseNotifications(){
    this.notificationCount++;
  }
  increaseInbox(){
    this.inboxCount++;
  }
}
