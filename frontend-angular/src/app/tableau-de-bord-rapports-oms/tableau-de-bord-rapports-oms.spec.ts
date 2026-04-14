import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordRapportsOms } from './tableau-de-bord-rapports-oms';

describe('TableauDeBordRapportsOms', () => {
  let component: TableauDeBordRapportsOms;
  let fixture: ComponentFixture<TableauDeBordRapportsOms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauDeBordRapportsOms],
    }).compileComponents();

    fixture = TestBed.createComponent(TableauDeBordRapportsOms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
