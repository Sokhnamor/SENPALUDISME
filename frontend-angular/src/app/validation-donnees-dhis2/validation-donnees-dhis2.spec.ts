import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDonneesDhis2 } from './validation-donnees-dhis2';

describe('ValidationDonneesDhis2', () => {
  let component: ValidationDonneesDhis2;
  let fixture: ComponentFixture<ValidationDonneesDhis2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationDonneesDhis2],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationDonneesDhis2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
