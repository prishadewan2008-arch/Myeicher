import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptimeCard } from './uptime-card';

describe('UptimeCard', () => {
  let component: UptimeCard;
  let fixture: ComponentFixture<UptimeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UptimeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(UptimeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
