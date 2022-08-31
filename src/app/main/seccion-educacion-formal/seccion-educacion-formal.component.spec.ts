import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEducacionFormalComponent } from './seccion-educacion-formal.component';

describe('SeccionEducacionFormalComponent', () => {
  let component: SeccionEducacionFormalComponent;
  let fixture: ComponentFixture<SeccionEducacionFormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionEducacionFormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionEducacionFormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
