import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationModelesRisque } from './configuration-modeles-risque';

describe('ConfigurationModelesRisque', () => {
  let component: ConfigurationModelesRisque;
  let fixture: ComponentFixture<ConfigurationModelesRisque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationModelesRisque],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurationModelesRisque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
