import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfaArgentinaComponent } from './afa-argentina.component';

describe('AfaArgentinaComponent', () => {
  let component: AfaArgentinaComponent;
  let fixture: ComponentFixture<AfaArgentinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfaArgentinaComponent]
    });
    fixture = TestBed.createComponent(AfaArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
