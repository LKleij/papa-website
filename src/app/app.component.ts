import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { initialNavHeight, initialViewportSize } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  initialViewportSize;
  initialNavHeight;
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.initialViewportSize = initialViewportSize;
    this.initialNavHeight = initialNavHeight;
    
    // this.meta.addTag({
    //   name:"viewport",
    //   content:"width=device-width, initial-scale=1.0"
    // })

    // console.log(this.meta.getTag('name=viewport'))
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: 'start' })
  }
}
