import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentInfoPageRoutingModule } from './student-info-routing.module';

import { StudentInfoPage } from './student-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentInfoPageRoutingModule
  ],
  declarations: [StudentInfoPage]
})
export class StudentInfoPageModule {}
