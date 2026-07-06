import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VecvCredentials } from './vecv-credentials';

describe('VecvCredentials', () => {
  let component: VecvCredentials;
  let fixture: ComponentFixture<VecvCredentials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VecvCredentials],
    }).compileComponents();

    fixture = TestBed.createComponent(VecvCredentials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
