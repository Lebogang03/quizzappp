import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondquizzPage } from './secondquizz.page';

describe('SecondquizzPage', () => {
  let component: SecondquizzPage;
  let fixture: ComponentFixture<SecondquizzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondquizzPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondquizzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
