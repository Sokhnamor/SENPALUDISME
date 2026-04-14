import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionModelesVisuels4 } from './gestion-modeles-visuels-4';

describe('GestionModelesVisuels4', () => {
  let component: GestionModelesVisuels4;
  let fixture: ComponentFixture<GestionModelesVisuels4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionModelesVisuels4],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionModelesVisuels4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
