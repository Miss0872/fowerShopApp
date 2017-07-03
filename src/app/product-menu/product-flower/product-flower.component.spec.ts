import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlowerComponent } from './product-flower.component';

describe('ProductFlowerComponent', () => {
  let component: ProductFlowerComponent;
  let fixture: ComponentFixture<ProductFlowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFlowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
