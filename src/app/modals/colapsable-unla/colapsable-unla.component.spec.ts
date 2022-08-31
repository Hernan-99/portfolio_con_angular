import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColapsableUnlaComponent } from './colapsable-unla.component';

describe('ColapsableUnlaComponent', () => {
  let component: ColapsableUnlaComponent;
  let fixture: ComponentFixture<ColapsableUnlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColapsableUnlaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColapsableUnlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
