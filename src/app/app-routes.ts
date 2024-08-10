import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'student-info',
    children: [
      {
        path: ':id',
        loadComponent: () => import('./student-info/student-info.page').then((m) => m.StudentInfoPage),
      }
    ]
  },
  {
    path: 'roster',
    loadComponent: () => import('./roster/roster.page').then((m) => m.RosterPage),
  },
];
