import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUniComponent } from './card-uni.component';

describe('CardUniComponent', () => {
  let component: CardUniComponent;
  let fixture: ComponentFixture<CardUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
