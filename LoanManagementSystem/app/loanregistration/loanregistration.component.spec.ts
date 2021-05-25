import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanregistrationComponent } from './loanregistration.component';

describe('LoanregistrationComponent', () => {
  let component: LoanregistrationComponent;
  let fixture: ComponentFixture<LoanregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
