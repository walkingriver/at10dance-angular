import { Component, inject, OnInit } from '@angular/core';
import { Platform, IonicModule } from '@ionic/angular';
import { StudentsService } from './students.service';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLinkActive, RouterLink],
})
export class AppComponent implements OnInit {
  private platform = inject(Platform);
  private students = inject(StudentsService);

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Roster',
      url: '/roster',
      icon: 'people',
    },
  ];

  constructor() {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    // this.statusBar.styleDefault();
    // this.splashScreen.hide();
  }

  async ngOnInit() {
    await this.students.init();
  }
}
