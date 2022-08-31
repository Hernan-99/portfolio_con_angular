import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCardFormComponent } from './card-card-form.component';

describe('CardCardFormComponent', () => {
  let component: CardCardFormComponent;
  let fixture: ComponentFixture<CardCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
