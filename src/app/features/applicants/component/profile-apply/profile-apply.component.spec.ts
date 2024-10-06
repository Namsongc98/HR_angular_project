import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileApplyComponent } from './profile-apply.component';

describe('ProfileApplyComponent', () => {
  let component: ProfileApplyComponent;
  let fixture: ComponentFixture<ProfileApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
