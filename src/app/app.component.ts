import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor(private http:HttpClient){

  }
}
