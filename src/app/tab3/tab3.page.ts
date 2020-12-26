import { Component, OnInit } from '@angular/core';

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
  superficieround: number;


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

  constructor() {}

  ngOnInit() {
      
  }

  calcular(){
    this.superficie = Math.PI * Math.pow(this.longitud, 2);
    this.superficieround = Number(this.superficie.toFixed(2));

    this.a = 0.5 * this.densidad * this.superficieround * Math.pow(this.velocidad, 3)/1000;
    this.b = 0.5 * this.densidad * this.superficieround * Math.pow(this.velocidad, 3)/1000;
    this.c = 0.5 * this.densidad * this.superficieround * Math.pow(this.velocidad, 3)/1000;
    this.d = 0.5 * this.densidad * this.superficieround * Math.pow(this.velocidad, 3)/1000;
    
    this.ar = Number(this.a.toFixed(2));
    this.br = Number(this.b.toFixed(2));
    this.cr = Number(this.c.toFixed(2));
    this.dr = Number(this.d.toFixed(2));

    this.e = this.a * 0.1;
    this.f = this.b * 0.2;
    this.g = this.c * 0.3;
    this.h = this.d * 0.4;
    
    this.er = Number(this.e.toFixed(2));
    this.fr = Number(this.f.toFixed(2));
    this.gr = Number(this.g.toFixed(2));
    this.hr = Number(this.h.toFixed(2));

  }
}
