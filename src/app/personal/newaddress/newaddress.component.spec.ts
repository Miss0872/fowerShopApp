import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaddressComponent } from './newaddress.component';

describe('NewaddressComponent', () => {
  let component: NewaddressComponent;
  let fixture: ComponentFixture<NewaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
