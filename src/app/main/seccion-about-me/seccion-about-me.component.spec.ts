import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAboutMeComponent } from './seccion-about-me.component';

describe('SeccionAboutMeComponent', () => {
  let component: SeccionAboutMeComponent;
  let fixture: ComponentFixture<SeccionAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
