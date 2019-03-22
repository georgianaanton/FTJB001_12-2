import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginGuard } from './guards/login.guard';
import { SignupGuard } from './guards/signup.guard';

const routes:Routes = [
    // {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent, canActivate:[SignupGuard]},
    {path:'signup', component: SignupComponent, canActivate:[SignupGuard]},
    {path:'profile/:username', component: ProfileComponent, canActivate: [LoginGuard]},
    {path:'**', redirectTo: 'home'}
];

export const routingModule = RouterModule.forRoot(routes);