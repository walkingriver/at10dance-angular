import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RosterPageRoutingModule } from './roster-routing.module';

import { RosterPage } from './roster.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RosterPageRoutingModule
  ],
  declarations: [RosterPage]
})
export class RosterPageModule {}
