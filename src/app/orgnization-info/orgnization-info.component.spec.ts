import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgnizationInfoComponent } from './orgnization-info.component';

describe('OrgnizationInfoComponent', () => {
  let component: OrgnizationInfoComponent;
  let fixture: ComponentFixture<OrgnizationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgnizationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgnizationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
