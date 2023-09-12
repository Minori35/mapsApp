import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenPagesComponent } from './full-screen-pages.component';

describe('FullScreenPagesComponent', () => {
  let component: FullScreenPagesComponent;
  let fixture: ComponentFixture<FullScreenPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreenPagesComponent]
    });
    fixture = TestBed.createComponent(FullScreenPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
