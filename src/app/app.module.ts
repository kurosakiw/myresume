import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgClass } from '@angular/common';
import { RouterModule,Routes,RouterOutlet } from '@angular/router';
//add
import { AppComponent } from './app.component';
import { AppRoutingModule } from  './app-route.module'
import { LayoutSideComponent } from  './layout/layout.component'
import { LeftComponent } from  '././public/left/left.component'
import { RightComponent } from  '././public/right/right.component'
import { AboutComponent } from  './about/about.component'
import { HomeComponent } from  './home/home.component'
import { CaseComponent } from  './case/case.component'
import { ContactComponent } from  './contact/contact.component'
import {HashLocationStrategy , LocationStrategy} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LayoutSideComponent,
    RightComponent,
    LeftComponent,
    CaseComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
