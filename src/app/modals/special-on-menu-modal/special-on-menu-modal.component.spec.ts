import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOnMenuModalComponent } from './special-on-menu-modal.component';

describe('SpecialOnMenuModalComponent', () => {
  let component: SpecialOnMenuModalComponent;
  let fixture: ComponentFixture<SpecialOnMenuModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialOnMenuModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialOnMenuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
