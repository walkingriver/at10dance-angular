import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentInfoPage } from './student-info.page';

const routes: Routes = [
  {
    path: ':id',  // <= Change this path to add the :id
    component: StudentInfoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentInfoPageRoutingModule {}
