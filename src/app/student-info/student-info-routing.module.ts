import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentInfoPage } from './student-info.page';

const routes: Routes = [
  {
    path: '',
    component: StudentInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentInfoPageRoutingModule {}
