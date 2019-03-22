import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isValid:boolean = false;
  user = {
    isValid: false,
    username: null,
    email: null,
    token: null
  }
  constructor() { }

  getLogin(){
    this.isValid = true;
    this.showStatus();
  }
  getLogout(){
    this.isValid = false;
    this.showStatus();
  }

  showStatus(){
    console.log(this.isValid);
  }
}
