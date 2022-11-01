import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1: number;
  num2: number;
  result = 0;

  constructor(private calculatorService: CalculatorService) {}

  async sum() {
    console.log(this.num1);
    
    this.result = this.calculatorService.sum(this.num1, this.num2);
  }

  substract() {
    this.result = this.calculatorService.sum(this.num1, this.num2);
  }

  multiplication() {
    this.result = this.calculatorService.sum(this.num1, this.num2);
  }

  division() {
    this.result = this.calculatorService.sum(this.num1, this.num2);
  }

}
