import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;

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

  ionViewDidEnter() {
    this.createBarChart();
  }

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

    this.createBarChart();

  }

  //Funcion Grafica Inicio
  createBarChart() {
    let ctx = this.barChart.nativeElement
    ctx.height = 400;
    this.bars = new Chart(ctx, {
      type: 'line',
      data: {
        //Nombre de las etiquetas
        labels: ['0.1', '0.2', '0.3', '0.4'],
        datasets: [{
          //Nombre variable
          label: 'Del Viento',
          //Datos
          data: [this.a, this.b, this.c, this.d],
          backgroundColor: 'transparent', 
          pointBackgroundColor: 'rgb(245, 229, 27)',
          borderColor: 'rgb(245, 229, 27)',
          borderWidth: 1
        },
        {
          //Nombre variable 2
          label: 'Del Aerogenerador',
          data: [this.e, this.f, this.g, this.h],
          backgroundColor: 'transparent', 
          borderColor: 'rgb(63, 195, 128)',
          pointBackgroundColor: 'rgb(63, 195, 128)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            barPercentage: 0.9,
            gridLines: {
              offsetGridLines: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

//Grafica Final
}
