import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcLoginComponent } from './dc-login.component';

describe('DcLoginComponent', () => {
  let component: DcLoginComponent;
  let fixture: ComponentFixture<DcLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
