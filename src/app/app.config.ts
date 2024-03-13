import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
//import { COMMON_MODULES, MAT_MODULES } from './common-modules';

// PreloadAllModules: 
/*Angular will preload all lazy-loaded modules in the background, after the initial bundle
 has been loaded but before the user navigates to any routes that require those modules. 
 This can help improve the perceived performance of the application by reducing the delay when 
 navigating to lazy-loaded routes.*/

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,  withPreloading(PreloadAllModules)), 
    provideAnimationsAsync(), 
    provideHttpClient()
  ]
};

// importProvidersFrom(MatCardModule)