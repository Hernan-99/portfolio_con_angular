import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormInteracComponent } from './card-form-interac.component';

describe('CardFormInteracComponent', () => {
  let component: CardFormInteracComponent;
  let fixture: ComponentFixture<CardFormInteracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormInteracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFormInteracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
