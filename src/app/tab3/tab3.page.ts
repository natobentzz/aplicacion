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
  variable1: 0.1;
  variable2: 0.2;
  variable3: 0.3;
  variable4: 0.4;
  pi = 3.1416;


  a: number;
  b: number;
  c: number;
  d: number;

  e: number;
  f: number;
  g: number;
  h: number;


  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
      
  }

  calcular(){
    this.superficie = Math.PI * Math.pow(this.longitud, 2);

    this.a = 0.5 * this.densidad * this.superficie * Math.pow(this.velocidad, 3)/1000;
    this.b = 0.5 * this.densidad * this.superficie * Math.pow(this.velocidad, 3)/1000;
    this.c = 0.5 * this.densidad * this.superficie * Math.pow(this.velocidad, 3)/1000;
    this.d = 0.5 * this.densidad * this.superficie * Math.pow(this.velocidad, 3)/1000;

    this.e = this.a * 0.1;
    this.f = this.b * 0.2;
    this.g = this.c * 0.3;
    this.h = this.d * 0.4;

  }
}
