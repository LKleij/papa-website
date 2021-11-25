import { Component, OnInit } from '@angular/core';
import { initialNavHeight, initialViewportSize } from '../app.constants';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  initialViewportSize;
  initialNavHeight;
  constructor() { }

  ngOnInit(): void {
    this.initialViewportSize = initialViewportSize;
    this.initialNavHeight = initialNavHeight;
  }

  scroll(name: string) {
    document.getElementsByClassName(name)[0].scrollIntoView({behavior: 'smooth', block: 'start' });
  }
}
