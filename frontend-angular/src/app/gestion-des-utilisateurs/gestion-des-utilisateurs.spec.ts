import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesUtilisateurs } from './gestion-des-utilisateurs';

describe('GestionDesUtilisateurs', () => {
  let component: GestionDesUtilisateurs;
  let fixture: ComponentFixture<GestionDesUtilisateurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDesUtilisateurs],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionDesUtilisateurs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
