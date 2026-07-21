import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetUtilisationCard } from './fleet-utilisation-card';

describe('FleetUtilisationCard', () => {
  let component: FleetUtilisationCard;
  let fixture: ComponentFixture<FleetUtilisationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetUtilisationCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FleetUtilisationCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
