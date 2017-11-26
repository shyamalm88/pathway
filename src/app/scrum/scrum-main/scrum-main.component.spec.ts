import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumMainComponent } from './scrum-main.component';

describe('ScrumMainComponent', () => {
  let component: ScrumMainComponent;
  let fixture: ComponentFixture<ScrumMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
