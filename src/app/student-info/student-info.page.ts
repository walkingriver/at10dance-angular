import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform, IonicModule } from '@ionic/angular';
import { map, switchMap, tap } from 'rxjs/operators';
import { StudentsService } from '../students.service';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Student } from '../student';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-student-info',
    templateUrl: './student-info.page.html',
    styleUrls: ['./student-info.page.scss'],
    standalone: true,
    imports: [
    IonicModule,
    FormsModule,
    AsyncPipe,
    JsonPipe
],
})
export class StudentInfoPage implements OnInit {
  // Always inject your services at the top of the class
  private route = inject(ActivatedRoute);
  private platform = inject(Platform);
  private router = inject(Router);
  private studentService = inject(StudentsService);

  emailPattern =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  student$ = this.route.paramMap.pipe(
    switchMap((params) => this.studentService.getStudent(params.get('id'))),
    tap((student) => {
      if (!student) {
        this.router.navigateByUrl('/roster');
      }
    })
  );

  studentVm$ = this.student$.pipe(map(this.cloneStudent));

  isMobile = false;

  async ngOnInit() {
    await this.platform.ready();
    this.isMobile = this.platform.is('ios') || this.platform.is('android');
  }

  cloneStudent(student: Student): Student {
    return JSON.parse(JSON.stringify(student));
  }

  async onSubmit(student) {
    await this.studentService.saveStudent(student);
    this.router.navigateByUrl('/roster');
  }

  async takePicture(student) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.DataUrl
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    let imageUrl = image.dataUrl;

    // Can be set to the src of an image now
    console.log(imageUrl);
    student.image = imageUrl;
  };
}
