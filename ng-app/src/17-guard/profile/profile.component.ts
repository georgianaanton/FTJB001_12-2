import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name:string;
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) {
    activatedRoute.params.subscribe((param:any)=>{
      this.name = param['username'];
    });

    console.log(this.userService.user)
  }

  ngOnInit() {
  }

}
