import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,  withPreloading(PreloadAllModules), withDebugTracing()), 
    provideAnimationsAsync(), 
    provideAnimationsAsync(),
    provideHttpClient(),]
};
