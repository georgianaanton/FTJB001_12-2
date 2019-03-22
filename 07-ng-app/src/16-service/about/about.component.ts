import { Component, OnInit } from '@angular/core';
import { Util } from '../services/util.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private utilService:Util, private userService:UserService) { }

  ngOnInit() {
  }

}
