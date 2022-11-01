import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  sum(n1: number, n2: number) {
    return n1 + n2;
  }

  substraction(n1: number, n2: number) {
    return n1 - n2;
  }

  multiplication(n1: number, n2: number) {
    return n1 * n2;
  }

  division(n1: number, n2: number) {
    if(n2 === 0) {
      return null;
    }

    return n1 / n2;
  }
}
