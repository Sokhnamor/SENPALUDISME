import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateurRapportsPersonnalises } from './generateur-rapports-personnalises';

describe('GenerateurRapportsPersonnalises', () => {
  let component: GenerateurRapportsPersonnalises;
  let fixture: ComponentFixture<GenerateurRapportsPersonnalises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateurRapportsPersonnalises],
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateurRapportsPersonnalises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
