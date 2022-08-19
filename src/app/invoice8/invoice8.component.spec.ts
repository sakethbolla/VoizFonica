import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice8Component } from './invoice8.component';

describe('Invoice8Component', () => {
  let component: Invoice8Component;
  let fixture: ComponentFixture<Invoice8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invoice8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
