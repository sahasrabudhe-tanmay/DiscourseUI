import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcRouterWrapperComponent } from './dc-router-wrapper.component';

describe('DcRouterWrapperComponent', () => {
  let component: DcRouterWrapperComponent;
  let fixture: ComponentFixture<DcRouterWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcRouterWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcRouterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
