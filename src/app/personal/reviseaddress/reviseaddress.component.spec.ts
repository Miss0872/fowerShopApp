import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviseaddressComponent } from './reviseaddress.component';

describe('ReviseaddressComponent', () => {
  let component: ReviseaddressComponent;
  let fixture: ComponentFixture<ReviseaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviseaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviseaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
