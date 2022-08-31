import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPcComponent } from './card-pc.component';

describe('CardPcComponent', () => {
  let component: CardPcComponent;
  let fixture: ComponentFixture<CardPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
