import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  velocidad: 1;
  longitud: 1;
  coeficiente: 1;
  superficie: number;
  variable1: 0.87;
  variable2: 1;
  variable3: 1.2;
  variable4: 1.42;
  pi = 3.1416;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
      
  }

  calcular(){
    this.superficie = Math.PI * Math.pow(this.longitud, 2);
    
  }

}
