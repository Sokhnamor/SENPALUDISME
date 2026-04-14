import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationIntegrationDhis2 } from './configuration-integration-dhis2';

describe('ConfigurationIntegrationDhis2', () => {
  let component: ConfigurationIntegrationDhis2;
  let fixture: ComponentFixture<ConfigurationIntegrationDhis2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationIntegrationDhis2],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurationIntegrationDhis2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
