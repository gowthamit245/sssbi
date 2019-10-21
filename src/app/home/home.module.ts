import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'', component: LayoutComponent,
    children:[
      {path: '', component: HomeComponent, data: { pagename: 'Home' }}
    ]
   } ];

@NgModule({
  declarations: [LayoutComponent,HomeComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
