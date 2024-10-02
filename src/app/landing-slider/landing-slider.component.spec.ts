import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSliderComponent } from './landing-slider.component';

describe('LandingSliderComponent', () => {
  let component: LandingSliderComponent;
  let fixture: ComponentFixture<LandingSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingSliderComponent]
    });
    fixture = TestBed.createComponent(LandingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
