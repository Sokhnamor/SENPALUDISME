import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametresLinguistiques } from './parametres-linguistiques';

describe('ParametresLinguistiques', () => {
  let component: ParametresLinguistiques;
  let fixture: ComponentFixture<ParametresLinguistiques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametresLinguistiques],
    }).compileComponents();

    fixture = TestBed.createComponent(ParametresLinguistiques);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
