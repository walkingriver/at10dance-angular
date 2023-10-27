import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
