import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent} from '../shared/header/header.component';
import { FooterComponent} from '../shared/footer/footer.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'', component: LayoutComponent,
    children:[
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent}
    ]
   } ];

@NgModule({
  declarations: [LayoutComponent,HeaderComponent,FooterComponent,AboutComponent,ContactComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
