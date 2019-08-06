import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdqiuzPage } from './thirdqiuz.page';

describe('ThirdqiuzPage', () => {
  let component: ThirdqiuzPage;
  let fixture: ComponentFixture<ThirdqiuzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdqiuzPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdqiuzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
