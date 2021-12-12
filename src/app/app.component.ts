import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { initialNavHeight } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly initialNavHeight = initialNavHeight;


  constructor(private meta: Meta) { }

  ngOnInit() {

    // window.addEventListener('resize', () => {
    //   currentMargin$.next(this.calculateTextMargin(window.innerWidth));
    // })

    this.meta.addTag({
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, minimum-scale=0.50, maximum-scale=1.75"
    })

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

}