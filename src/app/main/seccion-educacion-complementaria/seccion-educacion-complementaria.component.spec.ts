import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEducacionComplementariaComponent } from './seccion-educacion-complementaria.component';

describe('SeccionEducacionComplementariaComponent', () => {
  let component: SeccionEducacionComplementariaComponent;
  let fixture: ComponentFixture<SeccionEducacionComplementariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionEducacionComplementariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionEducacionComplementariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
