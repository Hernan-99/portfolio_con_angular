import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMaquetacionComponent } from './card-maquetacion.component';

describe('CardMaquetacionComponent', () => {
  let component: CardMaquetacionComponent;
  let fixture: ComponentFixture<CardMaquetacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMaquetacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMaquetacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
