import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDigitalersComponent } from './card-digitalers.component';

describe('CardDigitalersComponent', () => {
  let component: CardDigitalersComponent;
  let fixture: ComponentFixture<CardDigitalersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDigitalersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDigitalersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
