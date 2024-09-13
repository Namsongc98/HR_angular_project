import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobRequestComponent } from './create-job-request.component';

describe('CreateJobRequestComponent', () => {
  let component: CreateJobRequestComponent;
  let fixture: ComponentFixture<CreateJobRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJobRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
