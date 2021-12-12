import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  readonly isInFrame = { home: false, services: false, aboutme: false }
  isInFrameD = { ... this.isInFrame, home: true }

  constructor() { }

  ngOnInit(): void {

    window.addEventListener('scroll', () => {
      // let homePosition = document.querySelector('.home-scroll').getBoundingClientRect();
      let servicesPosition = document.querySelector('.services-scroll').getBoundingClientRect();
      let aboutmePosition = document.querySelector('.aboutme-scroll').getBoundingClientRect();

      if (aboutmePosition.top <= 200)
        this.isInFrameD = { ...this.isInFrame, aboutme: true }
      else if (servicesPosition.top <= 200)
        this.isInFrameD = { ...this.isInFrame, services: true }
      else
        this.isInFrameD = { ...this.isInFrame, home: true }
    })

  }

  scroll(name: string) {
    document.getElementsByClassName(name)[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
