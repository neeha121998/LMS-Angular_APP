import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationIdComponent } from './registration-id.component';

describe('RegistrationIdComponent', () => {
  let component: RegistrationIdComponent;
  let fixture: ComponentFixture<RegistrationIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
