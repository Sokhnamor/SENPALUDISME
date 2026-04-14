import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordActiviteUtilisateurs } from './tableau-de-bord-activite-utilisateurs';

describe('TableauDeBordActiviteUtilisateurs', () => {
  let component: TableauDeBordActiviteUtilisateurs;
  let fixture: ComponentFixture<TableauDeBordActiviteUtilisateurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauDeBordActiviteUtilisateurs],
    }).compileComponents();

    fixture = TestBed.createComponent(TableauDeBordActiviteUtilisateurs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
