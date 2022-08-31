import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSecuComponent } from './card-secu.component';

describe('CardSecuComponent', () => {
  let component: CardSecuComponent;
  let fixture: ComponentFixture<CardSecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSecuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
