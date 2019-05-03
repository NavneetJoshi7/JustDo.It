import { TestBed, inject } from '@angular/core/testing';

import { ToDoManagerService } from './to-do-manager.service';

describe('ToDoManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoManagerService]
    });
  });

  it('should be created', inject([ToDoManagerService], (service: ToDoManagerService) => {
    expect(service).toBeTruthy();
  }));
});
