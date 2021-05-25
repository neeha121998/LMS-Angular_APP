import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YettoapproveComponent } from './yettoapprove.component';

describe('YettoapproveComponent', () => {
  let component: YettoapproveComponent;
  let fixture: ComponentFixture<YettoapproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YettoapproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YettoapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
