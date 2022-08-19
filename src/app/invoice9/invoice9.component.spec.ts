import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoice9Component } from './invoice9.component';

describe('Invoice9Component', () => {
  let component: Invoice9Component;
  let fixture: ComponentFixture<Invoice9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoice9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invoice9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
