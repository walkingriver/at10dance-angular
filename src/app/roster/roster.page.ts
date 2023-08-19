import { Component } from '@angular/core';
import { ActionSheetButton, ActionSheetController, AlertButton, AlertController, ToastController, IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentsService } from '../students.service';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-roster',
    templateUrl: './roster.page.html',
    styleUrls: ['./roster.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        RouterLink,
        NgFor,
        NgIf,
        AsyncPipe,
    ],
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


  async presentActionSheet(student: Student) {
    const markPresentButton: ActionSheetButton = {
      text: 'Mark Present',
      icon: 'eye',
      handler: () => this.studentService.markPresent(student)
    };

    const markAbsentButton: ActionSheetButton = {
      text: 'Mark Absent',
      role: 'selected',
      icon: 'eye-off-outline',
      handler: () => this.studentService.markAbsent(student)
    };

    const deleteButton: ActionSheetButton = {
      text: 'Delete',
      icon: 'trash',
      role: 'destructive',
      handler: () => this.confirmDeleteStudent(student)
    };

    const cancelButton: ActionSheetButton = {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel'
    };

    const actionSheet = await this.actionSheetController.create({
      header: `${student.firstName} ${student.lastName}`,
      buttons: [
        markPresentButton, markAbsentButton, deleteButton, cancelButton
      ],
    });

    await actionSheet.present();
  }

  async confirmDeleteStudent(student: Student) {
    const deleteButton: AlertButton = {
      text: 'Delete',
      handler: () => this.deleteStudent(student),
    };

    const cancelButton: AlertButton = {
      text: 'Never mind',
      role: 'cancel',
    };

    const alert = await this.alertController.create({
      header: 'Delete this student?',
      subHeader: `${student.firstName} ${student.lastName}`,
      message: 'This operation cannot be undone.',
      buttons: [deleteButton, cancelButton]
    });

    await alert.present();
  }

  async deleteStudent(student: Student) {
    await this.studentService.deleteStudent(student.id);

    const alert = await this.toastController.create({
      message: `${student.firstName} ${student.lastName} has been deleted.`,
      position: 'top',
      duration: 30000,
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
