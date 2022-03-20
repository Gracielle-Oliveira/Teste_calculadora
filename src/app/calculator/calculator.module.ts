import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from '../calculator/component/calculator.component';
import { ServiceCalculator } from '../calculator/service/service.service';


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponent
  ],
  providers: [
    ServiceCalculator
  ]
})
export class CalculatorModule { }
