import { Component, OnInit } from '@angular/core';
import { Util } from '../services/util.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private utilService:Util, private userService:UserService){ }

  ngOnInit() {
  }

  increase(){
    this.utilService.increaseCount();
  }

  login(){
    this.userService.getLogin();
  }



}
