import { TestBed, inject } from '@angular/core/testing';

import { NgSongsService } from './ng-songs.service';

describe('NgSongsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgSongsService]
    });
  });

  it('should be created', inject([NgSongsService], (service: NgSongsService) => {
    expect(service).toBeTruthy();
  }));
});
