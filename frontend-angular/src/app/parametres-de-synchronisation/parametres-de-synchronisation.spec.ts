import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametresDeSynchronisation } from './parametres-de-synchronisation';

describe('ParametresDeSynchronisation', () => {
  let component: ParametresDeSynchronisation;
  let fixture: ComponentFixture<ParametresDeSynchronisation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametresDeSynchronisation],
    }).compileComponents();

    fixture = TestBed.createComponent(ParametresDeSynchronisation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
