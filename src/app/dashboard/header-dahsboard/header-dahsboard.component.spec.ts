import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDahsboardComponent } from './header-dahsboard.component';

describe('HeaderDahsboardComponent', () => {
  let component: HeaderDahsboardComponent;
  let fixture: ComponentFixture<HeaderDahsboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDahsboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDahsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
