import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-modeles-visuels-4',
  standalone: true,
  imports: [CommonModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gestion-modeles-visuels-4.html',
  styleUrl: './gestion-modeles-visuels-4.css',
})
export class GestionModelesVisuels4Component {}

