import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { ServicesComponent } from './services/services.component';
import { BiSolutionsComponent } from './bi-solutions/bi-solutions.component';
import { BusinessAnalyticsComponent } from './business-analytics/business-analytics.component';
import { BigDataComponent } from './big-data/big-data.component';
import { IotComponent } from './iot/iot.component';
import { StaffingServicesComponent } from './staffing-services/staffing-services.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { ItOutsourceComponent } from './it-outsource/it-outsource.component';
import { WebInterfaceComponent } from './web-interface/web-interface.component';
import { JiraComponent } from './jira/jira.component';
import { DataScienceComponent } from './data-science/data-science.component';

import { FormsModule }   from '@angular/forms';
import { MoreTechnologiesComponent } from './more-technologies/more-technologies.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  {
    path:'', component: LayoutComponent,
    children:[
      {path: 'about', component: AboutComponent, data: { pagename: 'AboutUs' }},
      {path: 'contact', component: ContactComponent, data: { pagename: 'ConactUs' }} ,
      {path: 'success-stories', component: SuccessStoriesComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'careers', component: CareersComponent},
      {path: 'bi-solutions', component: BiSolutionsComponent},
      {path: 'business-analytics', component: BusinessAnalyticsComponent},
      {path: 'big-data', component: BigDataComponent},
      {path: 'iot', component: IotComponent},
      {path: 'staffing-services', component: StaffingServicesComponent},
      {path: 'digital-marketing', component: DigitalMarketingComponent},
      {path: 'it-outsource', component: ItOutsourceComponent},
      {path: 'web-interface', component: WebInterfaceComponent},
      {path: 'jira', component: JiraComponent},
      {path: 'data-science', component: DataScienceComponent},
      {path: 'more-technologies', component: MoreTechnologiesComponent}


    ]
   } ];

@NgModule({
  declarations: [LayoutComponent,AboutComponent,ContactComponent, SuccessStoriesComponent, ServicesComponent, BiSolutionsComponent, BusinessAnalyticsComponent, BigDataComponent, IotComponent, StaffingServicesComponent, DigitalMarketingComponent, ItOutsourceComponent, WebInterfaceComponent, JiraComponent, DataScienceComponent, MoreTechnologiesComponent, CareersComponent],
  imports: [
    CommonModule,FormsModule, RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
