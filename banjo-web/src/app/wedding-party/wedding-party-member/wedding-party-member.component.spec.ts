import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPartyMemberComponent } from './wedding-party-member.component';

describe('WeddingPartyMemberComponent', () => {
  let component: WeddingPartyMemberComponent;
  let fixture: ComponentFixture<WeddingPartyMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingPartyMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingPartyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
