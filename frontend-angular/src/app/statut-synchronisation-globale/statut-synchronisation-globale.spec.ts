import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutSynchronisationGlobale } from './statut-synchronisation-globale';

describe('StatutSynchronisationGlobale', () => {
  let component: StatutSynchronisationGlobale;
  let fixture: ComponentFixture<StatutSynchronisationGlobale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatutSynchronisationGlobale],
    }).compileComponents();

    fixture = TestBed.createComponent(StatutSynchronisationGlobale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
