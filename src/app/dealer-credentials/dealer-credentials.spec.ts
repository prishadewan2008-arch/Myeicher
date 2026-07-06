import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerCredentials } from './dealer-credentials';

describe('DealerCredentials', () => {
  let component: DealerCredentials;
  let fixture: ComponentFixture<DealerCredentials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealerCredentials],
    }).compileComponents();

    fixture = TestBed.createComponent(DealerCredentials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
