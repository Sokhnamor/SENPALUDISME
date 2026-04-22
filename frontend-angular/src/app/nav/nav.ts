import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.css', './nav-active.css'],
})
export class NavComponent {
  user: User = {
    id: 1,
    name: 'Admin',
    email: 'admin@senpaludisme.com',
    role_id: 1,
    region_id: null,
    phone: '+221 77 123 45 67',
    bio: 'Administrateur système',
    role: { id: 1, name: 'Super Admin' }
  };
}
