import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionExperienciaLaboralComponent } from './seccion-experiencia-laboral.component';

describe('SeccionExperienciaLaboralComponent', () => {
  let component: SeccionExperienciaLaboralComponent;
  let fixture: ComponentFixture<SeccionExperienciaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionExperienciaLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionExperienciaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
