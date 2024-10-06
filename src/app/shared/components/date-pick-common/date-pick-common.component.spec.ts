import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickCommonComponent } from './date-pick-common.component';

describe('DatePickCommonComponent', () => {
  let component: DatePickCommonComponent;
  let fixture: ComponentFixture<DatePickCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
