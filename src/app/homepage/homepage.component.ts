import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  directTo() {
    document.getElementsByClassName('contactme-view')[0].scrollIntoView({behavior: 'smooth', block: 'start' });

  }

}
