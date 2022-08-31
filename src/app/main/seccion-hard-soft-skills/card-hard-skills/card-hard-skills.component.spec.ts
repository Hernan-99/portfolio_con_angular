import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHardSkillsComponent } from './card-hard-skills.component';

describe('CardHardSkillsComponent', () => {
  let component: CardHardSkillsComponent;
  let fixture: ComponentFixture<CardHardSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHardSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHardSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
