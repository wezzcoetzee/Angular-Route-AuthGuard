import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./shared/guards/auth.guard";
import { DashboardComponent } from './dashboard/dashboard.component'; //just for an example

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, canActivate: [ AuthGuard ] }      
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }