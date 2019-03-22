import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = {isAuthenticated: false}
  constructor() { }

  showUser(){
    console.log(this.user)
  }
}
