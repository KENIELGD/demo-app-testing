import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  //Arrange
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for sum', () => {
    it('should return twelve', () => {
      //Act
      const rta = service.sum(7, 5);
      //Assert
      expect(rta).toEqual(12);
    });

    it('should return one hundred', () => {
      //Act - Assert
      expect(service.sum(44, 56) === 100).toBeTruthy();
    });
  });

  describe('Test for substraction', () => {
    it('should return zero', () => {
      const rta = service.substraction(15, 15);
      expect(rta).toEqual(0);
    });

    it('should return sixty-eight', () => {
      const rta = service.substraction(12, 80);
      expect(rta).toEqual(68);
    });
  });

  describe('Test for multiplication', () => {
    it('should return thirty', () => {
      const rta = service.multiplication(3, 10);
      expect(rta).toEqual(30);
    });

    it('should return twenty-four', () => {
      const rta = service.multiplication(12, 2);
      expect(rta).toEqual(24);
    });
  });

  describe('Test for division', () => {
    it('should return six', () => {
      const rta = service.division(60, 10);
      expect(rta).toEqual(6);
    });

    it('should return null', () => {
      const rta = service.division(1234, 0);
      expect(rta).toBeNull();
    });
  });
});
