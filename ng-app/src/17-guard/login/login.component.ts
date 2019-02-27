import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    console.log(this.userService.user)
  }

  getLogin(){
    console.log('tring to get login')
    // send ajax req, fetch data, 
    this.userService.user.isValid = true;
    this.router.navigate(['','profile', this.userService.user.name])
  }

}
