import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-summary',
  template: `<ion-icon slot="start" name="person-outline"></ion-icon>
<ion-label>{{student.lastName}}, {{student.firstName}}</ion-label>  `
})
export class StudentSummaryComponent implements OnInit {
  @Input() student: Student;

  constructor() { }

  ngOnInit() { }

}
