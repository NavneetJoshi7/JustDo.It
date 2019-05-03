import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTasksListComponent } from './completed-tasks-list.component';

describe('CompletedTasksListComponent', () => {
  let component: CompletedTasksListComponent;
  let fixture: ComponentFixture<CompletedTasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTasksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
