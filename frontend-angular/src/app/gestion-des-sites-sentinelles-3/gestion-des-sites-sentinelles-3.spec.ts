import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesSitesSentinelles3 } from './gestion-des-sites-sentinelles-3';

describe('GestionDesSitesSentinelles3', () => {
  let component: GestionDesSitesSentinelles3;
  let fixture: ComponentFixture<GestionDesSitesSentinelles3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDesSitesSentinelles3],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionDesSitesSentinelles3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
