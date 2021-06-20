import { TestBed } from '@angular/core/testing';

import { PosicionGPSService } from './posicion-gps.service';

describe('PosicionGPSService', () => {
  let service: PosicionGPSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosicionGPSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
