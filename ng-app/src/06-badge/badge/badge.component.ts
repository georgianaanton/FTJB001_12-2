import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  notifications = 22;
  constructor() { }

  ngOnInit() {
  }

  increase(){
    var notifications = 5;
    console.log("increase notifications count here");
    console.log("Local copy : "+ notifications);
    console.log("Instance copy : "+ this.notifications);
    notifications++;
    this.notifications++;
    console.log("Local copy : "+ notifications);
    console.log("Instance copy : "+ this.notifications);
  }

}
