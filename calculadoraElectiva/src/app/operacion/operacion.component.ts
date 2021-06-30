import { SummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent {
  num1:number;
  num2:number = 0
  res:number = 0

  sumar(){
    this.res=this.num1+this.num2
  }

  restar(){
    this.res=this.num1-this.num2
  }

  multiplicar(){
    this.res=this.num1*this.num2
  }

  dividir(){
    this.res=this.num1/this.num2
  }


  constructor() { }

  ngOnInit(): void {
  }   
}
