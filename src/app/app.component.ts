import { Component, OnInit } from '@angular/core';
import { initialNavHeight } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly initialNavHeight = initialNavHeight;

  constructor() { }

  ngOnInit() {
  }

}