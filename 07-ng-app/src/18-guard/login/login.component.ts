import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  signin(){
    console.log("SignIn");
    this.userService.user.isAuthenticated = true;
    this.userService.showUser();
    this.router.navigate(['welcome']);
  }

}
