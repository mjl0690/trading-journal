import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSearchBarComponent } from './stock-search-bar.component';

describe('StockSearchBarComponent', () => {
  let component: StockSearchBarComponent;
  let fixture: ComponentFixture<StockSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
