import { Component, OnInit } from '@angular/core';
import { globalPaddingLeftAndRight } from '../app.constants';

@Component({
  selector: 'app-services2',
  templateUrl: './services2.component.html',
  styleUrls: ['./services2.component.css']
})
export class Services2Component implements OnInit {
  globalPaddingLeftAndRight = globalPaddingLeftAndRight;

  constructor() { }

  ngOnInit(): void {
  }

}
