import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationIndicateursRapport } from './configuration-indicateurs-rapport';

describe('ConfigurationIndicateursRapport', () => {
  let component: ConfigurationIndicateursRapport;
  let fixture: ComponentFixture<ConfigurationIndicateursRapport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationIndicateursRapport],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurationIndicateursRapport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
