import {Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule , Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
