import { Route } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { HomePage } from './pages/home/HomePage';
import { LoginPage } from './pages/login/loginPage';
import { TasksListPage } from './pages/tasks/TasksListPage';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePage,
    canActivate: [authGuard],
    children: [{ path: '', component: TasksListPage }],
  },

  { path: 'login', component: LoginPage },
  { path: '**', redirectTo: '' },
];
