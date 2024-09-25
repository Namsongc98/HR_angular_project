import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPermitObtainedComponent } from './item-permit-obtained.component';

describe('ItemPermitObtainedComponent', () => {
  let component: ItemPermitObtainedComponent;
  let fixture: ComponentFixture<ItemPermitObtainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPermitObtainedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPermitObtainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
