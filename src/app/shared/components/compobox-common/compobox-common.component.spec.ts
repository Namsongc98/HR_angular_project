import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoboxCommonComponent } from './compobox-common.component';

describe('CompoboxCommonComponent', () => {
  let component: CompoboxCommonComponent;
  let fixture: ComponentFixture<CompoboxCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoboxCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoboxCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
