import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Presence } from '../presence.enum';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
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

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  studentUrl(student: Student) {
    return `/student/${student.id}`;
  }

  async presentActionSheet(student: Student) {
    const actionSheet = await this.actionSheetController.create({
      header: `${student.firstName} ${student.lastName}`,
      buttons: [{
        text: 'Mark Present',
        icon: 'eye',
        handler: () => {
          this.markPresent(student);
        }
      }, {
        text: 'Mark Absent',
        icon: 'eye-off-outline',
        handler: () => {
          this.markAbsent(student);
        }
      }, {
        text: 'Delete',
        icon: 'trash',
        role: 'destructive',
        handler: () => {
          this.presentDeleteAlert(student);
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

  async presentDeleteAlert(student: Student) {
    const alert = await this.alertController.create(
      {
        header: 'Delete this student?',
        subHeader: `${student.firstName} ${student.lastName}`,
        message: 'This operation cannot be undone.',
        buttons: [
          {
            text: 'Delete',
            handler: () => this.deleteStudent(student)
          },
          {
            text: 'Never mind',
            role: 'cancel'
          }
        ]
      }
    );

    await alert.present();
  }

  async deleteStudent(student: Student) {
    this.students = this.students.filter(x => x.id !== student.id);
    const alert = await this.toastController.create(
      {
        message: `${student.firstName} ${student.lastName} has been deleted.`,
        position: 'top',
        duration: 3000
      });

    await alert.present();
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