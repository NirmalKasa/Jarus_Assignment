import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicySuccessComponent } from './policy-success.component';

describe('PolicySuccessComponent', () => {
  let component: PolicySuccessComponent;
  let fixture: ComponentFixture<PolicySuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicySuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
