import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes:Routes = [
    // {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'home/:name', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'signup', component: SignupComponent},
    {path:'**', redirectTo: 'home'}
];

export const routingModule = RouterModule.forRoot(routes);