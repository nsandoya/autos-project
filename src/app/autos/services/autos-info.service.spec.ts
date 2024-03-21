import { TestBed } from '@angular/core/testing';

import { AutosInfo } from './autos-info.service';

describe('AutosInfoServiceService', () => {
  let service: AutosInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutosInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
