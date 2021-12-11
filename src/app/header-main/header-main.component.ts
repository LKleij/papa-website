import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { globalPaddingLeftAndRight, initialNavHeight, initialViewportSize } from '../app.constants';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit, OnDestroy {
  globalPaddingLeftAndRight = globalPaddingLeftAndRight;
  constructor() { }

  ngOnInit(): void {
    // this.devicePixelRatio.next(window.devicePixelRatio);

    // document.getElementById('one').
  }

  ngOnDestroy() {
  }

  onScroll() {
    let elem = document.getElementById('services-header-scroll');
    elem.scrollIntoView({ behavior: 'smooth', block: 'start' });


  }

}
