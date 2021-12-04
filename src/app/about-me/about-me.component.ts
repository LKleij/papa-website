import { Component, OnInit } from '@angular/core';
import { globalPaddingLeftAndRight } from '../app.constants';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  globalPaddingLeftAndRight = globalPaddingLeftAndRight;
  constructor() { }

  ngOnInit(): void {
  }

}
