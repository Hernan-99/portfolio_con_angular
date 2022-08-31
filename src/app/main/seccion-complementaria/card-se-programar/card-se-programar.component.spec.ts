import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSeProgramarComponent } from './card-se-programar.component';

describe('CardSeProgramarComponent', () => {
  let component: CardSeProgramarComponent;
  let fixture: ComponentFixture<CardSeProgramarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSeProgramarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSeProgramarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
