import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesDatasetsEtAnnotations } from './gestion-des-datasets-et-annotations';

describe('GestionDesDatasetsEtAnnotations', () => {
  let component: GestionDesDatasetsEtAnnotations;
  let fixture: ComponentFixture<GestionDesDatasetsEtAnnotations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDesDatasetsEtAnnotations],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionDesDatasetsEtAnnotations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
