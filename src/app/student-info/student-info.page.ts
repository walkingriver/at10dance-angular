import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from '../student';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { mockStudents } from '../mock-students';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.page.html',
  styleUrls: ['./student-info.page.scss'],
})
export class StudentInfoPage implements OnInit, OnDestroy {
  students = [...mockStudents];
  student: Student = { firstName: '', lastName: '', id: '' };
  isMobile = false;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private platform: Platform,
    private router: Router) {
  }

  async ngOnInit() {
    await this.platform.ready();
    this.isMobile = this.platform.is('ios') || this.platform.is('android');

    this.sub = this.route.paramMap.subscribe(x => {
      const id = x.get('id');
      this.student = this.students.find(x => x.id === id);

      if (!this.student) {
        this.router.navigateByUrl('/students');
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
