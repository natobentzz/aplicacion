import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  densidad: 1;
  longitud: 1;
  coeficiente: 1;
  superficie: number;
  variable1: 5;
  variable2: 10;
  variable3: 15;
  variable4: 20;
  variable5: 25;
  pi = 3.1416;

  //Variables tabla
  a: number;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
      
  }

  calcular(){
    this.superficie = Math.PI * Math.pow(this.longitud, 2);
    
  }

  calcular1(){
   this.a = 0.5 * this.densidad * this.superficie * Math.pow(this.variable1, 3) /1000;
    
  }
}
