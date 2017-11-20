import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes,RouterOutlet } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent{
  imgList:Array<any>  = [
      { picurl: './assets/images/about_1.jpg'},
      { picurl: './assets/images/about_2.png'},
      { picurl: './assets/images/about_3.png'},
  ];



}
