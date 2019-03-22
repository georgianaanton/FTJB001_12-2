import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn:boolean = false;
  constructor() { }

  isLoggedIn(){
    return this.loggedIn;
  }

  getLoggedIn(){
    this.loggedIn = true;
  }

  getLoggedOut(){
    this.loggedIn = false;
  }

}
