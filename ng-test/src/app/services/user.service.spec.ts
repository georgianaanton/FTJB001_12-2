import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [UserService]
  }));

  it(
    "should be create", 
    inject([UserService], 
    (userService:UserService)=>{
      expect(userService).toBeDefined();
      expect(userService).toBeTruthy();
      // expect(userService).not.toBeDefined();
    })
  )

  it("user is not loggedIn initially", inject([UserService], (service:UserService)=>{
    expect(service.loggedIn).toBeFalsy();

  }))

  it("user should be loggedIn", inject([UserService], (service:UserService)=>{
    
    service.getLoggedIn();
    expect(service.loggedIn).toBeTruthy();
  }))

});
