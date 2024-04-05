import { ApplicationConfig } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { WithDataCustomPreloadStartegy } from '../../../tools-routes/src/lib/with-data-custom-preload-strategy';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(WithDataCustomPreloadStartegy)),
    provideClientHydration()
  ]
};
