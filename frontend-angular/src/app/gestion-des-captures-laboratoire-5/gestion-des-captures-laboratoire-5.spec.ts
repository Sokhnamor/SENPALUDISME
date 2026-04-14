import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesCapturesLaboratoire5 } from './gestion-des-captures-laboratoire-5';

describe('GestionDesCapturesLaboratoire5', () => {
  let component: GestionDesCapturesLaboratoire5;
  let fixture: ComponentFixture<GestionDesCapturesLaboratoire5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDesCapturesLaboratoire5],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionDesCapturesLaboratoire5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
