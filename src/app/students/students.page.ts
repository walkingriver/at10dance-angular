import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { of } from 'rxjs';
import { Presence } from '../presence.enum';
import { ActionSheetController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  students = [...mockStudents];
  present = Presence.Present;
  absent = Presence.Unknown;

  constructor(private actionSheetController: ActionSheetController, private router: Router) { }

  ngOnInit() {
  }

  async presentActionSheet(student: Student) {
    const actionSheet = await this.actionSheetController.create({
      header: `${student.firstName} ${student.lastName}`,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteStudent(student);
        }
      }, {
        text: 'Mark Present',
        icon: 'eye-outline',
        handler: async () => {
          await this.markPresent(student);
        }
      }, {
        text: 'Mark Absent',
        icon: 'eye-off-outline',
        handler: async () => {
          await this.markAbsent(student);
        }
      }, {
        text: 'Details',
        icon: 'document-text-outline',
        handler: () => {
          this.studentDetails(student);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async markAbsent(student: Student) {
    student.status = this.absent;
  }

  async markPresent(student: Student) {
    student.status = this.present;
  }

  async studentDetails(student: Student) {
    this.router.navigateByUrl(`/student-info/${student.id}`, {
      state: { student }
    })
  }

  async deleteStudent(student: Student) {
    this.students = this.students.filter(x => x.id !== student.id);
  }

}

const mockStudents: Student[] = [
  { id: '1', firstName: 'Monique', lastName: 'Barrett' },
  { id: '2', firstName: 'Pauline', lastName: 'Davis' },
  { id: '3', firstName: 'Heidi', lastName: 'Burke' },
  { id: '4', firstName: 'Jennifer', lastName: 'Townsend' },
  { id: '5', firstName: 'Casey', lastName: 'McBride' },
  { id: '6', firstName: 'Diane', lastName: 'Rivera' },
  { id: '7', firstName: 'Troy', lastName: 'Gutierrez' },
  { id: '8', firstName: 'Priscilla', lastName: 'Little' },
  { id: '9', firstName: 'Bobby', lastName: 'Robbins' },
  { id: '10', firstName: 'Edmund', lastName: 'Gardner' }
]