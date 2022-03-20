import { inject, TestBed } from '@angular/core/testing';
import { ServiceCalculator } from './service.service';

describe('ServiceCalculator', () => {
  let service: ServiceCalculator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCalculator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ensure that 1 + 4 = 5', 
    inject([ServiceCalculator], (service: ServiceCalculator) => {
      let soma = service.calcular(1, 4, ServiceCalculator.sum);
      expect(soma).toEqual(5);
    })
  );

  it('should ensure that 1 - 4 = -3', 
  inject([ServiceCalculator], (service: ServiceCalculator) => {
    let subtracao = service.calcular(1, 4, ServiceCalculator.subtract);
    expect(subtracao).toEqual(-3);
  })
);

it('should ensure that 1 / 4 = 0.25', 
  inject([ServiceCalculator], (service: ServiceCalculator) => {
    let divisao = service.calcular(1, 4, ServiceCalculator.division);
    expect(divisao).toEqual(0.25);
  })
);

it('should ensure that 1 * 4 = 4', 
  inject([ServiceCalculator], (service: ServiceCalculator) => {
    let multiplicacao = service.calcular(1, 4, ServiceCalculator.multiplication);
    expect(multiplicacao).toEqual(4);
  })
);

it('should return 0 to invalid operation', 
    inject([ServiceCalculator], (service: ServiceCalculator) => {
      let operacaoInvalida = service.calcular(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
    })
  );

});





