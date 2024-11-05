import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { User } from '../auth/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  authUser$: Observable<User | null>;

  constructor(private router: Router, private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }

  toggleDrawer(): void {
    this.drawer.toggle();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
