import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurmenuComponent } from './ourmenu.component';

describe('OurmenuComponent', () => {
  let component: OurmenuComponent;
  let fixture: ComponentFixture<OurmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurmenuComponent]
    });
    fixture = TestBed.createComponent(OurmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
