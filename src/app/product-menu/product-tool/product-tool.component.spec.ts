import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductToolComponent } from './product-tool.component';

describe('ProductToolComponent', () => {
  let component: ProductToolComponent;
  let fixture: ComponentFixture<ProductToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
