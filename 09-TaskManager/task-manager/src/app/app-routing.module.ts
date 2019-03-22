import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './task/view/view.component';
import { CreateComponent } from './task/create/create.component';

const routes: Routes = [
  {path:'view', component: ViewComponent},
  {path:'create', component: CreateComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'view'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
