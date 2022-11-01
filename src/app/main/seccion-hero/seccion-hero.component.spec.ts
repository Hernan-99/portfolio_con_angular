import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeccionHeroComponent } from './seccion-hero.component';

describe('SeccionHeroComponent', () => {
  let component: SeccionHeroComponent;
  let fixture: ComponentFixture<SeccionHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeccionHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeccionHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
