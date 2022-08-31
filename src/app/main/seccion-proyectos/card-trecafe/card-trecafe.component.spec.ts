import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrecafeComponent } from './card-trecafe.component';

describe('CardTrecafeComponent', () => {
  let component: CardTrecafeComponent;
  let fixture: ComponentFixture<CardTrecafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTrecafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTrecafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
