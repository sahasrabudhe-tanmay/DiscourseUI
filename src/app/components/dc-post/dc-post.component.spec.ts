import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcPostComponent } from './dc-post.component';

describe('DcPostComponent', () => {
  let component: DcPostComponent;
  let fixture: ComponentFixture<DcPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
