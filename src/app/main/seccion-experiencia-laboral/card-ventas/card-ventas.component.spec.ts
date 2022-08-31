import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVentasComponent } from './card-ventas.component';

describe('CardVentasComponent', () => {
  let component: CardVentasComponent;
  let fixture: ComponentFixture<CardVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
