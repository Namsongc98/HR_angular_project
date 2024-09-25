import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLanguagesComponent } from './item-languages.component';

describe('ItemLanguagesComponent', () => {
  let component: ItemLanguagesComponent;
  let fixture: ComponentFixture<ItemLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
