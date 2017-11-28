import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSprintHeaderComponent } from './active-sprint-header.component';

describe('ActiveSprintHeaderComponent', () => {
  let component: ActiveSprintHeaderComponent;
  let fixture: ComponentFixture<ActiveSprintHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSprintHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSprintHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
