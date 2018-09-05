import { TestBed, inject } from '@angular/core/testing';

import { AlgoAStarService } from './algo-astar.service';

describe('AlgoAStarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlgoAStarService]
    });
  });

  it('should be created', inject([AlgoAStarService], (service: AlgoAStarService) => {
    expect(service).toBeTruthy();
  }));
});
