import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInglesComponent } from './card-ingles.component';

describe('CardInglesComponent', () => {
  let component: CardInglesComponent;
  let fixture: ComponentFixture<CardInglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInglesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
