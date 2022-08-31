import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardYoProgramoComponent } from './card-yo-programo.component';

describe('CardYoProgramoComponent', () => {
  let component: CardYoProgramoComponent;
  let fixture: ComponentFixture<CardYoProgramoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardYoProgramoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardYoProgramoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
