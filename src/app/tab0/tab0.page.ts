import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab0',
  templateUrl: './tab0.page.html',
  styleUrls: ['./tab0.page.scss'],
})
export class Tab0Page implements OnInit {

  V: 1;
  a: 1;
  R: 1;
  A: number;
  superficieround: number;
  pi = 3.1416;

  potenciaV: number;
  rotor: number;
  multiplicador: number;
  alternador: number;
  transformador: number;
  rendimiento: number;

  ar: number;
  br: number;
  cr: number;
  dr: number;
  er: number;
  fr: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  calcular(){
    this.A = Math.PI * Math.pow(this.R, 2);
    this.superficieround = Number(this.A.toFixed(2));
    
    this.potenciaV = 0.5 * this.A * this.a * Math.pow(this.V, 2)/1000;
    this.rotor = this.potenciaV * 0.59;
    this.multiplicador = this.rotor * 0.85;
    this.alternador = this.multiplicador * 0.77;
    this.transformador = this.alternador * 0.76;
    this.rendimiento = this.transformador/this.potenciaV;

    this.ar = Number(this.potenciaV.toFixed(2));
    this.br = Number(this.rotor.toFixed(2));
    this.cr = Number(this.multiplicador.toFixed(2));
    this.dr = Number(this.alternador.toFixed(2));
    this.er = Number(this.transformador.toFixed(2));
    this.fr = Number(this.rendimiento.toFixed(2));
    

  }
}

