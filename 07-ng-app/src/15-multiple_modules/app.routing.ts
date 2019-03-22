import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
    // {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path: 'user', loadChildren: "./modules/user/user.module#UserModule"},
    {path:'**', redirectTo: 'home'}
];

export const routingModule = RouterModule.forRoot(routes);