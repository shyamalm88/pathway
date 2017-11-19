import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwLeftMainNavComponent } from './pw-left-main-nav.component';

describe('PwLeftMainNavComponent', () => {
  let component: PwLeftMainNavComponent;
  let fixture: ComponentFixture<PwLeftMainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwLeftMainNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwLeftMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
