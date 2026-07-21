import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelAndEnergyCard } from './fuel-and-energy-card';

describe('FuelAndEnergyCard', () => {
  let component: FuelAndEnergyCard;
  let fixture: ComponentFixture<FuelAndEnergyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelAndEnergyCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FuelAndEnergyCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
