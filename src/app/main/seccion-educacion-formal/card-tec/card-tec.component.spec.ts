import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTecComponent } from './card-tec.component';

describe('CardTecComponent', () => {
  let component: CardTecComponent;
  let fixture: ComponentFixture<CardTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
