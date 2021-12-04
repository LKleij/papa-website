import { Component, OnInit } from '@angular/core';
import { globalPaddingLeftAndRight } from '../app.constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  globalPaddingLeftAndRight = globalPaddingLeftAndRight;
  constructor() { }

  ngOnInit(): void {
  }

}
