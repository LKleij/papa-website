import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { initialNavHeight, initialViewportSize } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  initialViewportSize = initialViewportSize;
  currentViewportSize = initialViewportSize;
  // currentViewportSize$ = new BehaviorSubject<{ height: number, width: number }>(null!);
  readonly initialNavHeight = initialNavHeight;

  hideNav = true;
  constructor(private meta: Meta) { }

  ngOnInit() {

    console.log(initialViewportSize)
    window.addEventListener('scroll', () => {
      let position = document.querySelector('.nav-top-wrapper').getBoundingClientRect();
      this.hideNav = !(position.top <= -initialNavHeight)
    })

    window.addEventListener('resize', () => {
      if (window.devicePixelRatio == 1.0) {
        this.initialViewportSize = { width: window.innerWidth, height: window.innerHeight }
      }

      this.currentViewportSize = { width: window.innerWidth, height: window.innerHeight }

      if (window.devicePixelRatio >= 1.0) {
        this.currentViewportSize.width = this.currentViewportSize.width;
        this.currentViewportSize.height = this.currentViewportSize.height;
      }

      console.log(this.currentViewportSize)
      // console.log(window.screen.height)
      // this.currentViewportSize$.next(this.currentViewportSize);
    })

    this.meta.addTag({
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, minimum-scale=0.50, maximum-scale=1.75"
    })

    // console.log(this.meta.getTag('name=viewport'))
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  private min(val1: number, val2: number) {
    return val1 >= val2 ? val1 : val2;
  }
}
