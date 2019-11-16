import { TestBed } from '@angular/core/testing';

import { TransportadoraService } from './transportadora-service';

describe('TransportadoraServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransportadoraService = TestBed.get(TransportadoraService);
    expect(service).toBeTruthy();
  });
});
