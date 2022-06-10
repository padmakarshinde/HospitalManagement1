import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateappointmentComponent } from './generateappointment.component';

describe('GenerateappointmentComponent', () => {
  let component: GenerateappointmentComponent;
  let fixture: ComponentFixture<GenerateappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
