import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { AuthComponent } from './features/auth/auth.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [{
  path: 'auth',
  component: AuthComponent,
  loadChildren: () =>
    import('./features/auth/auth.module').then((m) => m.AuthModule),
},
{
  path: 'dashboard',
  canActivate: [authGuard],
  component: DashboardComponent,
  loadChildren: () =>
    import('./features/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    ),
},
{
  path: '**',
  redirectTo: 'auth',
},];