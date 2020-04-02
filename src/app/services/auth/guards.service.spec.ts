import { TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { GuardsService } from './guards.service';

describe('GuardsService', () => {
  let service: GuardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthService, Router]
    });
    service = TestBed.inject(GuardsService);
  });
});
