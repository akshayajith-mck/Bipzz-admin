import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { GlobalInterceptorService } from './global-interceptor.service';

describe('GlobalInterceptorService', () => {
  let service: GlobalInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule]
    });
    service = TestBed.inject(GlobalInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
