import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice7Component } from './invoice7.component';

describe('Invoice7Component', () => {
  let component: Invoice7Component;
  let fixture: ComponentFixture<Invoice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invoice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
