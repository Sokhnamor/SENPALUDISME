import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordPipelinesMl1 } from './tableau-de-bord-pipelines-ml-1';

describe('TableauDeBordPipelinesMl1', () => {
  let component: TableauDeBordPipelinesMl1;
  let fixture: ComponentFixture<TableauDeBordPipelinesMl1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauDeBordPipelinesMl1],
    }).compileComponents();

    fixture = TestBed.createComponent(TableauDeBordPipelinesMl1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
