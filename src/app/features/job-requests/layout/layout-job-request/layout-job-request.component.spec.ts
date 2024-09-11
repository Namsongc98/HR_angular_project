import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutJobRequestComponent } from './layout-job-request.component';

describe('LayoutJobRequestComponent', () => {
  let component: LayoutJobRequestComponent;
  let fixture: ComponentFixture<LayoutJobRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutJobRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutJobRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
