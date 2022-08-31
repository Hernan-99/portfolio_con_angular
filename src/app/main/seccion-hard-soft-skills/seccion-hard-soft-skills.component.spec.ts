import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionHardSoftSkillsComponent } from './seccion-hard-soft-skills.component';

describe('SeccionHardSoftSkillsComponent', () => {
  let component: SeccionHardSoftSkillsComponent;
  let fixture: ComponentFixture<SeccionHardSoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionHardSoftSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionHardSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
