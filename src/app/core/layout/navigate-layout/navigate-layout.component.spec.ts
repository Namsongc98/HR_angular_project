import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateLayoutComponent } from './navigate-layout.component';

describe('NavigateLayoutComponent', () => {
  let component: NavigateLayoutComponent;
  let fixture: ComponentFixture<NavigateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
