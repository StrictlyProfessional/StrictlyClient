import { TestBed } from '@angular/core/testing';

import { VaultServiceService } from './vault-service.service';

describe('VaultServiceService', () => {
  let service: VaultServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaultServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
