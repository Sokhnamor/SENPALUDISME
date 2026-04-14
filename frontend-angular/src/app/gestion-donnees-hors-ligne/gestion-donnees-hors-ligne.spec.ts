import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDonneesHorsLigne } from './gestion-donnees-hors-ligne';

describe('GestionDonneesHorsLigne', () => {
  let component: GestionDonneesHorsLigne;
  let fixture: ComponentFixture<GestionDonneesHorsLigne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDonneesHorsLigne],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionDonneesHorsLigne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
