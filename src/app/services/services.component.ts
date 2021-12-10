import { Component, OnInit } from '@angular/core';
import { globalPaddingLeftAndRight } from '../app.constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  globalPaddingLeftAndRight = globalPaddingLeftAndRight;
  currentHover = { service1: false, service2: true, service3: false }
  constructor() { }

  ngOnInit(): void {

    document.getElementById('service1').addEventListener("mouseover", () =>
      this.currentHover = { service1: true, service2: false, service3: false }
    )
    document.getElementById('service2').addEventListener("mouseover", () =>
      this.currentHover = { service1: false, service2: true, service3: false }
    )
    document.getElementById('service3').addEventListener("mouseover", () =>
      this.currentHover = { service1: false, service2: false, service3: true }
    )
  }

}
