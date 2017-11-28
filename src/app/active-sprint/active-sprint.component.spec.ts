import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSprintComponent } from './active-sprint.component';

describe('ActiveSprintComponent', () => {
  let component: ActiveSprintComponent;
  let fixture: ComponentFixture<ActiveSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
