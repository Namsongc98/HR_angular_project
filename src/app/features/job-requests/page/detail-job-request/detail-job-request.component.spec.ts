import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJobRequestComponent } from './detail-job-request.component';

describe('DetailJobRequestComponent', () => {
  let component: DetailJobRequestComponent;
  let fixture: ComponentFixture<DetailJobRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailJobRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJobRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
