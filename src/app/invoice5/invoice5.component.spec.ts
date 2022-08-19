import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice5Component } from './invoice5.component';

describe('Invoice5Component', () => {
  let component: Invoice5Component;
  let fixture: ComponentFixture<Invoice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invoice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
