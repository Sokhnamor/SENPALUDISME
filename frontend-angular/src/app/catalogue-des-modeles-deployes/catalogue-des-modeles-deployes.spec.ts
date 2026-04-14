import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueDesModelesDeployes } from './catalogue-des-modeles-deployes';

describe('CatalogueDesModelesDeployes', () => {
  let component: CatalogueDesModelesDeployes;
  let fixture: ComponentFixture<CatalogueDesModelesDeployes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogueDesModelesDeployes],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogueDesModelesDeployes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
