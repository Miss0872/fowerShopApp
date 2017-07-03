import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPlantComponent } from './product-plant.component';

describe('ProductPlantComponent', () => {
  let component: ProductPlantComponent;
  let fixture: ComponentFixture<ProductPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
