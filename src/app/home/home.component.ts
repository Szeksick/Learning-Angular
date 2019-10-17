import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  h2Style: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  buttonHome() {
    alert('Kliknięto przycisk');
  }

  colorChange() {
      if (this.h2Style === false) {
        this.h2Style = true;
      } else {
        this.h2Style = false;
      }
  }
}
