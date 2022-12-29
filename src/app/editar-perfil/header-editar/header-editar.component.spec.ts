import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEditarComponent } from './header-editar.component';

describe('HeaderEditarComponent', () => {
  let component: HeaderEditarComponent;
  let fixture: ComponentFixture<HeaderEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
