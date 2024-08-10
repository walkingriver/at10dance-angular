import { enableProdMode, importProvidersFrom } from '@angular/core';


import { environment } from './environments/environment';

import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { appRoutes } from 'src/app/app-routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(appRoutes),
        importProvidersFrom(BrowserModule, IonicModule.forRoot()),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ]
})
  .catch((err) => console.log(err));

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
