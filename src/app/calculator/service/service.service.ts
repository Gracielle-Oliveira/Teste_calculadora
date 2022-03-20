import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCalculator {

  static readonly sum: string = '+';
  static readonly subtract: string = '-';
  static readonly division: string = '/';
  static readonly multiplication: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number {
  	let result: number; // armazena o resultado da operação

  	switch(operacao) {

      case ServiceCalculator.sum :
  	    result = num1 + num2;
  		break;
  	  case ServiceCalculator.subtract:
  	    result = num1 - num2;
  		break;
  	  case ServiceCalculator.division:
  	    result = num1 / num2;
  		break;
  	  case ServiceCalculator.multiplication:
  	    result = num1 * num2;
  		break;
  	  default:
  	    result = 0;
  	}
  	return result;
  }
}
