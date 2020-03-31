import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentsPageRoutingModule } from './students-routing.module';

import { StudentsPage } from './students.page';
import { StudentSummaryComponent } from '../student-summary/student-summary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentsPageRoutingModule
  ],
  declarations: [StudentsPage, StudentSummaryComponent]
})
export class StudentsPageModule {}
