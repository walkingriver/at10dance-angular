import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RosterPageRoutingModule } from './roster-routing.module';

import { RosterPage } from './roster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RosterPageRoutingModule
  ],
  declarations: [RosterPage]
})
export class RosterPageModule {}
