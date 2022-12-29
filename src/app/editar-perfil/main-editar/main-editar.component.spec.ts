import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEditarComponent } from './main-editar.component';

describe('MainEditarComponent', () => {
  let component: MainEditarComponent;
  let fixture: ComponentFixture<MainEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
