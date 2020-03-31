import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.page.html',
  styleUrls: ['./student-info.page.scss'],
})
export class StudentInfoPage implements OnInit {
  student: Student = { firstName: '', lastName: '', id: '' };
  isMobile = false;

  constructor(private location: Location, private platform: Platform, private router: Router) {
    const state = <any>this.location.getState();
    console.log(state);

    if (state.student ){
    this.student = state.student;} else {
      this.router.navigateByUrl('/students');
    }
  }

  async ngOnInit() {
    await this.platform.ready();
    this.isMobile = this.platform.is('ios') || this.platform.is('android');
  }

}
