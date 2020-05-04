import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RosterPage } from './roster.page';

const routes: Routes = [
  {
    path: '',
    component: RosterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RosterPageRoutingModule {}
