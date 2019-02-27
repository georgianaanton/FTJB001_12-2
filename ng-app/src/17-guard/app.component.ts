import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app';

  constructor(private userService:UserService, private router:Router){}
  getLogout(){
    console.log("getting logout")
    this.userService.user.isValid = false;
    this.router.navigate(['', 'home']);
    console.log(this.userService.user)
  }
}
