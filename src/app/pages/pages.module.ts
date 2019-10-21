import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:'', component: LayoutComponent,
    children:[
      {path: 'about', component: AboutComponent, data: { pagename: 'AboutUs' }},
      {path: 'contact', component: ContactComponent, data: { pagename: 'ConactUs' }} ,
      {path: 'success-stories', component: SuccessStoriesComponent},
      {path: 'services', component: ServicesComponent}


    ]
   } ];

@NgModule({
  declarations: [LayoutComponent,AboutComponent,ContactComponent, SuccessStoriesComponent, ServicesComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
