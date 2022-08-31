import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContenedorComponent } from './main-contenedor.component';

describe('MainContenedorComponent', () => {
  let component: MainContenedorComponent;
  let fixture: ComponentFixture<MainContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContenedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
