import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent} from '../shared/header/header.component';
import { FooterComponent} from '../shared/footer/footer.component';

const routes: Routes = [
  {
    path:'', component: LayoutComponent,
    children:[
      {path: '', component: HomeComponent}
    ]
   } ];

@NgModule({
  declarations: [HomeComponent,LayoutComponent,HeaderComponent,FooterComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
