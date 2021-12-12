import { Component, OnDestroy, OnInit } from '@angular/core';
import { pageMargins } from '../app.constants';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit, OnDestroy {
  currentMargin = pageMargins;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  onScroll() {
    let elem = document.getElementById('services-header-scroll');
    elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
