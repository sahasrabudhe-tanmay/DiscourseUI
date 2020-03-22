import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcNavbarComponent } from './dc-navbar.component';

describe('DcNavbarComponent', () => {
  let component: DcNavbarComponent;
  let fixture: ComponentFixture<DcNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
