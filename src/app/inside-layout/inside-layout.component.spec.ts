import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideLayoutComponent } from './inside-layout.component';

describe('InsideLayoutComponent', () => {
  let component: InsideLayoutComponent;
  let fixture: ComponentFixture<InsideLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsideLayoutComponent]
    });
    fixture = TestBed.createComponent(InsideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
