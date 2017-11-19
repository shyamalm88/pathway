import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwLeftProjectNavComponent } from './pw-left-project-nav.component';

describe('PwLeftProjectNavComponent', () => {
  let component: PwLeftProjectNavComponent;
  let fixture: ComponentFixture<PwLeftProjectNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwLeftProjectNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwLeftProjectNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
