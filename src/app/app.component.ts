import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StudentsService } from './students.service';
import { EnvironmentInjector } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
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

  constructor(public environmentInjector: EnvironmentInjector, private platform: Platform, private students: StudentsService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    await this.students.init();
  }
}
