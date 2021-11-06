import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Platform } from "@ionic/angular";
import { map, switchMap, tap } from "rxjs/operators";
import { StudentsService, Student } from "../students.service";

@Component({
  selector: "app-student-info",
  templateUrl: "./student-info.page.html",
  styleUrls: ["./student-info.page.scss"],
})
export class StudentInfoPage implements OnInit {
  emailPattern =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  student$ = this.route.paramMap.pipe(
    switchMap((params) => this.studentService.getStudent(params.get("id"))),
    tap((student) => {
      if (!student) {
        this.router.navigateByUrl("/roster");
      }
    })
  );

  studentVm$ = this.student$.pipe(map(this.cloneStudent));

  isMobile = false;

  constructor(
    private route: ActivatedRoute,
    private platform: Platform,
    private router: Router,
    private studentService: StudentsService
  ) {}

  async ngOnInit() {
    await this.platform.ready();
    this.isMobile = this.platform.is("ios") || this.platform.is("android");
  }

  cloneStudent(student: Student): Student {
    return JSON.parse(JSON.stringify(student));
  }

  async onSubmit(student) {
    await this.studentService.saveStudent(student);
    this.router.navigateByUrl("/roster");
  }
}
