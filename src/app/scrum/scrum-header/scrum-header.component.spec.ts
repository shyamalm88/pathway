import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumHeaderComponent } from './scrum-header.component';

describe('ScrumHeaderComponent', () => {
  let component: ScrumHeaderComponent;
  let fixture: ComponentFixture<ScrumHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
