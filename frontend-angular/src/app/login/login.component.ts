import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  template: `
    <div class="login-container">
      <h2>Connexion</h2>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <input formControlName="email" type="email" placeholder="Email" required>
        <input formControlName="password" type="password" placeholder="Mot de passe" required>
        <button type="submit" [disabled]="loginForm.invalid">Se connecter</button>
      </form>
      <p *ngIf="error">{{ error }}</p>
    </div>
  `,
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  loginForm: FormGroup;
  error = '';

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: (err) => this.error = 'Erreur connexion : ' + err.error?.message || err.message
      });
    }
  }
}
