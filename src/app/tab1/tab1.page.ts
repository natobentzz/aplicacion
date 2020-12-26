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
  pi = 3.1416;
  superficieround: number;

  //Variables tabla
  a: number;
  b: number;
  c: number;
  d: number;
  
  e: number;
  f: number;
  g: number;
  h: number;

  ar: number;
  br: number;
  cr: number;
  dr: number;
  
  er: number;
  fr: number;
  gr: number;
  hr: number;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
      
  }

  calcular(){
    this.superficie = Math.PI * Math.pow(this.longitud, 2);
    this.superficieround = Number(this.superficie.toFixed(2));
    
    this.a = 0.5 * this.densidad * this.superficie * Math.pow(5, 3)/1000;
    this.b = 0.5 * this.densidad * this.superficie * Math.pow(10, 3)/1000;
    this.c = 0.5 * this.densidad * this.superficie * Math.pow(15, 3)/1000;
    this.d = 0.5 * this.densidad * this.superficie * Math.pow(20, 3)/1000;

    this.ar = Number(this.a.toFixed(2));
    this.br = Number(this.b.toFixed(2));
    this.cr = Number(this.c.toFixed(2));
    this.dr = Number(this.d.toFixed(2));
    

    this.e = this.a * this.coeficiente;
    this.f = this.b * this.coeficiente;
    this.g = this.c * this.coeficiente;
    this.h = this.d * this.coeficiente;

    this.er = Number(this.e.toFixed(2));
    this.fr = Number(this.f.toFixed(2));
    this.gr = Number(this.g.toFixed(2));
    this.hr = Number(this.h.toFixed(2));
    
  }
}