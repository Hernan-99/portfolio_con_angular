import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBurgerComponent } from './btn-burger.component';

describe('BtnBurgerComponent', () => {
  let component: BtnBurgerComponent;
  let fixture: ComponentFixture<BtnBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
