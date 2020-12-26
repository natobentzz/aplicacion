import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit {

  velocidad: 1;
  longitud: 1;
  coeficiente: 1;
  superficie: number;
  variable1: 0.87;
  variable2: 1;
  variable3: 1.2;
  variable4: 1.42;
  pi = 3.1416;
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

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
      
  }

  calcular(){
    this.superficie = Math.PI * Math.pow(this.longitud, 2);
    this.superficieround = Number(this.superficie.toFixed(2));

    this.a = 0.5 * 0.87 * this.superficie * Math.pow(this.velocidad, 3)/1000;
    this.b = 0.5 * 1 * this.superficie * Math.pow(this.velocidad, 3)/1000;
    this.c = 0.5 * 1.2 * this.superficie * Math.pow(this.velocidad, 3)/1000;
    this.d = 0.5 * 1.42 * this.superficie * Math.pow(this.velocidad, 3)/1000;

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
