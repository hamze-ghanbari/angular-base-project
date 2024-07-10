import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Injector } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
// .then((appRef: { injector: Injector }) => appInjector(appRef.injector))
  .catch((err) => console.error(err));
