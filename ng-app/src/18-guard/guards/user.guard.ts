import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({providedIn:'root'})
export class UserGuard implements CanActivate {

    constructor(private router:Router, private userService:UserService){}

    canActivate():boolean{
        // return false;
        this.userService.showUser();
        if(this.userService.user.isAuthenticated == false){
            this.router.navigate(['login']);
        }

        return this.userService.user.isAuthenticated;
    }
} 