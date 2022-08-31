import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColapsableIspcComponent } from './colapsable-ispc.component';

describe('ColapsableIspcComponent', () => {
  let component: ColapsableIspcComponent;
  let fixture: ComponentFixture<ColapsableIspcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColapsableIspcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColapsableIspcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
