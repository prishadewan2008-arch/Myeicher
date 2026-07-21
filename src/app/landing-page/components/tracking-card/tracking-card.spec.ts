import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingCard } from './tracking-card';

describe('TrackingCard', () => {
  let component: TrackingCard;
  let fixture: ComponentFixture<TrackingCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackingCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
