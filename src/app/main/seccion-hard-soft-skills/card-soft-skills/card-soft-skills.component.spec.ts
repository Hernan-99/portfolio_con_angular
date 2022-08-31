import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSoftSkillsComponent } from './card-soft-skills.component';

describe('CardSoftSkillsComponent', () => {
  let component: CardSoftSkillsComponent;
  let fixture: ComponentFixture<CardSoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSoftSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
