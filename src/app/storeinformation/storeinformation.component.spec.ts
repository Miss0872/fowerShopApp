import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreinformationComponent } from './storeinformation.component';

describe('StoreinformationComponent', () => {
  let component: StoreinformationComponent;
  let fixture: ComponentFixture<StoreinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
