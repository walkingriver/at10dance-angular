import { Component } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  ToastController,
} from '@ionic/angular';
import { Observable } from 'rxjs';
import { Student, StudentsService } from '../students.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage {
  students$: Observable<Student[]>;

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private studentService: StudentsService,
    private toastController: ToastController
  ) {
    this.students$ = this.studentService.allStudents();
  }

  studentUrl(student: Student) {
    return `/student/${student.id}`;
  }

  async presentActionSheet(student: Student) {
    const actionSheet = await this.actionSheetController.create({
      header: `${student.firstName} ${student.lastName}`,
      buttons: [
        {
          text: 'Mark Present',
          icon: 'eye',
          handler: () => this.studentService.markPresent(student),
        },
        {
          text: 'Mark Absent',
          icon: 'eye-off-outline',
          handler: () => this.studentService.markAbsent(student),
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => this.presentDeleteAlert(student),
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => console.log('Cancel clicked'),
        },
      ],
    });

    await actionSheet.present();
  }

  async presentDeleteAlert(student: Student) {
    const alert = await this.alertController.create({
      header: 'Delete this student?',
      subHeader: `${student.firstName} ${student.lastName}`,
      message: 'This operation cannot be undone.',
      buttons: [
        {
          text: 'Delete',
          handler: () => this.deleteStudent(student),
        },
        {
          text: 'Never mind',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

  async deleteStudent(student: Student) {
    await this.studentService.deleteStudent(student.id);

    const alert = await this.toastController.create({
      message: `${student.firstName} ${student.lastName} has been deleted.`,
      position: 'top',
      duration: 3000,
    });

    await alert.present();
  }

  resetAttendance() {
    this.studentService.resetAttendance();
  }

  // Debugging only features
  onSeed() {
    this.studentService.seedData();
  }

  onClear() {
    this.studentService.clearData();
  }
}
