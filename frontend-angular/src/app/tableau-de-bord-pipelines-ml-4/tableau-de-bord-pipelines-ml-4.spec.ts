import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordPipelinesMl4 } from './tableau-de-bord-pipelines-ml-4';

describe('TableauDeBordPipelinesMl4', () => {
  let component: TableauDeBordPipelinesMl4;
  let fixture: ComponentFixture<TableauDeBordPipelinesMl4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauDeBordPipelinesMl4],
    }).compileComponents();

    fixture = TestBed.createComponent(TableauDeBordPipelinesMl4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
