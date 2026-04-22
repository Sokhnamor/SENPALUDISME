import { Component, signal, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavComponent } from './nav/nav';
import { routes } from './app.routes';
import { APP_INITIALIZER } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('frontend-angular');
}
