import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColapsableIdoComponent } from './colapsable-ido.component';

describe('ColapsableIdoComponent', () => {
  let component: ColapsableIdoComponent;
  let fixture: ComponentFixture<ColapsableIdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColapsableIdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColapsableIdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
