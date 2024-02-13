import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionFincasComponent } from './creacion-fincas.component';

describe('CreacionFincasComponent', () => {
  let component: CreacionFincasComponent;
  let fixture: ComponentFixture<CreacionFincasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionFincasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionFincasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
