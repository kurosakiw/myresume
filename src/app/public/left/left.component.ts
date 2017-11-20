import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],

})
export class LeftComponent{
  id:string = '0';
  menu(key){
    this.id = key;
  }




}
