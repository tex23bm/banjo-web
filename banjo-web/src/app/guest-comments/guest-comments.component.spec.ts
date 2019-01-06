import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCommentsComponent } from './guest-comments.component';

describe('GuestCommentsComponent', () => {
  let component: GuestCommentsComponent;
  let fixture: ComponentFixture<GuestCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
