import { Component, OnInit } from '@angular/core';
import { Platform, IonicModule } from '@ionic/angular';
import { StudentsService } from './students.service';
import { EnvironmentInjector } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [
    IonicModule,
    RouterLinkActive,
    RouterLink
],
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
