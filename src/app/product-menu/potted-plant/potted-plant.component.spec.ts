import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PottedPlantComponent } from './potted-plant.component';

describe('PottedPlantComponent', () => {
  let component: PottedPlantComponent;
  let fixture: ComponentFixture<PottedPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PottedPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PottedPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
