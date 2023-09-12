import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsPagesComponent } from './markets-pages.component';

describe('MarketsPagesComponent', () => {
  let component: MarketsPagesComponent;
  let fixture: ComponentFixture<MarketsPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketsPagesComponent]
    });
    fixture = TestBed.createComponent(MarketsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
