import { Component, OnInit } from '@angular/core';
import { initialNavHeight, initialViewportSize } from '../app.constants';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {
  initialViewportSize;
  initialNavHeight;
  constructor() { }

  ngOnInit(): void {
    this.initialNavHeight = initialNavHeight;
    this.initialViewportSize = initialViewportSize;
    console.log(initialViewportSize)
  }

}
