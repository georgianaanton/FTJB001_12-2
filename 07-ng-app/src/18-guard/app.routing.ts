import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserGuard } from './guards/user.guard';

const routes:Routes = [
    // {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'welcome', component: WelcomeComponent, canActivate:[UserGuard]},
    {path:'**', redirectTo: 'home'}
];

export const routingModule = RouterModule.forRoot(routes);