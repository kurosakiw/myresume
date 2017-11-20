import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
//add
import { AppComponent } from './app.component';
import { LayoutSideComponent } from  './layout/layout.component'
import { LeftComponent } from  '././public/left/left.component'
import { RightComponent } from  '././public/right/right.component'
import { AboutComponent } from  './about/about.component'
import { HomeComponent } from  './home/home.component'
import { CaseComponent } from  './case/case.component'
import { ContactComponent } from  './contact/contact.component'

const routes: Routes  = [
  { path: '', redirectTo: '/layout/home', pathMatch: 'full' },
  { path: 'layout', component: LayoutSideComponent,
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'case', component: CaseComponent},
      {path: 'contact', component: ContactComponent},
      {
        path: '', component: HomeComponent
      }
    ]
  },
  {
    path:'**',
    component:LayoutSideComponent
  }
  ];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
