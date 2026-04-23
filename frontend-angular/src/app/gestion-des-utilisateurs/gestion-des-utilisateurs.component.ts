import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-gestion-des-utilisateurs',
  standalone: true,
imports: [RouterLink, RouterLinkActive],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gestion-des-utilisateurs.html',
  styleUrl: './gestion-des-utilisateurs.css',
})
export class GestionDesUtilisateursComponent {}

