import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice6Component } from './invoice6.component';

describe('Invoice6Component', () => {
  let component: Invoice6Component;
  let fixture: ComponentFixture<Invoice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invoice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
