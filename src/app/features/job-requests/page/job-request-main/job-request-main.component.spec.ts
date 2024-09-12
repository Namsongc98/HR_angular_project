import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequestMainComponent } from './job-request-main.component';

describe('JobRequestMainComponent', () => {
  let component: JobRequestMainComponent;
  let fixture: ComponentFixture<JobRequestMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobRequestMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRequestMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
