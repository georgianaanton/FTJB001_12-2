import { NgModule } from '@angular/core';

import { routingModule } from './user.routing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
      LoginComponent,
      SignupComponent
  ],
  imports: [
    routingModule
  ]
})
export class UserModule { }
