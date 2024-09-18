import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaCommonComponent } from './textarea-common.component';

describe('TextareaCommonComponent', () => {
  let component: TextareaCommonComponent;
  let fixture: ComponentFixture<TextareaCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
