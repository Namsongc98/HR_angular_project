import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailApplicantComponent } from './form-detail-applicant.component';

describe('FormDetailApplicantComponent', () => {
  let component: FormDetailApplicantComponent;
  let fixture: ComponentFixture<FormDetailApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDetailApplicantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
