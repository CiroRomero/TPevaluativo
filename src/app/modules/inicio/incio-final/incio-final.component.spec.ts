import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioFinalComponent } from './incio-final.component';

describe('IncioFinalComponent', () => {
  let component: IncioFinalComponent;
  let fixture: ComponentFixture<IncioFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncioFinalComponent]
    });
    fixture = TestBed.createComponent(IncioFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
