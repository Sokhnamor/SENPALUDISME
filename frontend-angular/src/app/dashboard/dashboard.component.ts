import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<h1>Dashboard - Maquette à venir</h1>',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {}
