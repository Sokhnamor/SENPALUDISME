import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseDesDonneesChercheur } from './analyse-des-donnees-chercheur';

describe('AnalyseDesDonneesChercheur', () => {
  let component: AnalyseDesDonneesChercheur;
  let fixture: ComponentFixture<AnalyseDesDonneesChercheur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyseDesDonneesChercheur],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyseDesDonneesChercheur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
