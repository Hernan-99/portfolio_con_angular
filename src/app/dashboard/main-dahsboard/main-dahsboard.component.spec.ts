import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDahsboardComponent } from './main-dahsboard.component';

describe('MainDahsboardComponent', () => {
  let component: MainDahsboardComponent;
  let fixture: ComponentFixture<MainDahsboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDahsboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDahsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
