import { Component, OnInit } from '@angular/core';
import { ServiceCalculator } from '../service/service.service';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1: string;
  number2: string;
  result: number;
  operation: string;

  constructor(private service: ServiceCalculator) { }

  ngOnInit(): void {
    this.clear();
  }

  clear(): void {
    this.number1 = '0';
    this.number2 = null;
    this.result = null;
    this.operation = null;
  }


  addNumber(number: string): void {
    if (this.operation === null) {
      this.number1 = this.concatenateNumber(this.number1, number);
    } else {
      this.number2 = this.concatenateNumber(this.number2, number);
    }
  }


  concatenateNumber(currentNumber: string, concatNum: string): string {
    // reinicia o valor
    if (currentNumber === '0' || currentNumber === null) {
      currentNumber = '';
    }

    // concatena '0' antes do ponto
    if (concatNum === '.' && currentNumber === '') {
      return '0.';
    }

    // caso '.' digitado e já contenha um '.', apenas retorna
    if (concatNum === '.' && currentNumber.indexOf('.') > -1) {
      return currentNumber;
    }

    return currentNumber + concatNum;
  }

  setOperation(operation: string): void {
    // define a operação caso não exista uma
    if (this.operation === null) {
      this.operation = operation;
      return;
    }

    //efetua o cálculo da operação
        if (this.number2 !== null) {
      this.result = this.service.calcular(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation);
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = null;
      this.result = null;
    }
  }

  calculate(): void {
    if (this.number2 === null) {
      return;
    }

    this.result = this.service.calcular(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operation);
  }

  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    }
    if (this.number2 !== null) {
      return this.number2;
    }
    return this.number1;
  }


}
