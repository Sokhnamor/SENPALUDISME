import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesRolesEtPermissions } from './gestion-des-roles-et-permissions';

describe('GestionDesRolesEtPermissions', () => {
  let component: GestionDesRolesEtPermissions;
  let fixture: ComponentFixture<GestionDesRolesEtPermissions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDesRolesEtPermissions],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionDesRolesEtPermissions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
