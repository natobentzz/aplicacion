import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {

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
  b: number;
  c: number;
  d: number;
  e: number;
  
  f: number;
  g: number;
  h: number;
  i: number;
  j: number;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
      
  }

  calcular(){
    this.superficie = Math.PI * Math.pow(this.longitud, 2);
    
    this.a = 0.5 * this.densidad * this.superficie * Math.pow(5, 3)/1000;
    this.b = 0.5 * this.densidad * this.superficie * Math.pow(10, 3)/1000;
    this.c = 0.5 * this.densidad * this.superficie * Math.pow(15, 3)/1000;
    this.d = 0.5 * this.densidad * this.superficie * Math.pow(20, 3)/1000;
    this.e = 0.5 * this.densidad * this.superficie * Math.pow(25, 3)/1000;

    this.f = this.a * this.coeficiente;
    this.g = this.b * this.coeficiente;
    this.h = this.c * this.coeficiente;
    this.i = this.d * this.coeficiente;
    this.j = this.e * this.coeficiente;
  }
}