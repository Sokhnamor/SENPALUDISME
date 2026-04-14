import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionMedicale5 } from './region-medicale-5';

describe('RegionMedicale5', () => {
  let component: RegionMedicale5;
  let fixture: ComponentFixture<RegionMedicale5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionMedicale5],
    }).compileComponents();

    fixture = TestBed.createComponent(RegionMedicale5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
