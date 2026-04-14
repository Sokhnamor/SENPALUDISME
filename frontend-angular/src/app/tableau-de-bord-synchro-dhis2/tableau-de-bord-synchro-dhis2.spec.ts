import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordSynchroDhis2 } from './tableau-de-bord-synchro-dhis2';

describe('TableauDeBordSynchroDhis2', () => {
  let component: TableauDeBordSynchroDhis2;
  let fixture: ComponentFixture<TableauDeBordSynchroDhis2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauDeBordSynchroDhis2],
    }).compileComponents();

    fixture = TestBed.createComponent(TableauDeBordSynchroDhis2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
