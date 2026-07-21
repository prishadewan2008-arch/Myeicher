import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdates } from './view-updates';

describe('ViewUpdates', () => {
  let component: ViewUpdates;
  let fixture: ComponentFixture<ViewUpdates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUpdates],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewUpdates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
