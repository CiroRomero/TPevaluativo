import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apartado4Component } from './apartado-4.component';

describe('Apartado4Component', () => {
  let component: Apartado4Component;
  let fixture: ComponentFixture<Apartado4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Apartado4Component]
    });
    fixture = TestBed.createComponent(Apartado4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
