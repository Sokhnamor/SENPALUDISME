import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionMedicale1 } from './region-medicale-1';

describe('RegionMedicale1', () => {
  let component: RegionMedicale1;
  let fixture: ComponentFixture<RegionMedicale1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionMedicale1],
    }).compileComponents();

    fixture = TestBed.createComponent(RegionMedicale1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
