import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillanceModelesAudio } from './surveillance-modeles-audio';

describe('SurveillanceModelesAudio', () => {
  let component: SurveillanceModelesAudio;
  let fixture: ComponentFixture<SurveillanceModelesAudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveillanceModelesAudio],
    }).compileComponents();

    fixture = TestBed.createComponent(SurveillanceModelesAudio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
