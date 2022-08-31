import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRepCelComponent } from './card-rep-cel.component';

describe('CardRepCelComponent', () => {
  let component: CardRepCelComponent;
  let fixture: ComponentFixture<CardRepCelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRepCelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRepCelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
