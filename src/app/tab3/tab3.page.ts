import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  densidad: 1;
  longitud: 1;
  velocidad: 1;
  superficie: number;
  variable1: 10;
  variable2: 20;
  variable3: 30;
  variable4: 40;
  pi = 3.1416;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
      
  }

  calcular(){
    this.superficie = Math.PI * Math.pow(this.longitud, 2);
  }
}
