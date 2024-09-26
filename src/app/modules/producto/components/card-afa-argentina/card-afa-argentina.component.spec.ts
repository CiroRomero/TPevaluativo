import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAfaArgentinaComponent } from './card-afa-argentina.component';

describe('CardAfaArgentinaComponent', () => {
  let component: CardAfaArgentinaComponent;
  let fixture: ComponentFixture<CardAfaArgentinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAfaArgentinaComponent]
    });
    fixture = TestBed.createComponent(CardAfaArgentinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
