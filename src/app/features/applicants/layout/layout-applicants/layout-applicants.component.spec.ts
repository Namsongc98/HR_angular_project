import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApplicantsComponent } from './layout-applicants.component';

describe('LayoutApplicantsComponent', () => {
  let component: LayoutApplicantsComponent;
  let fixture: ComponentFixture<LayoutApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApplicantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
