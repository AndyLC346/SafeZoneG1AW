import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// If you are *not* using server-side rendering (Angular Universal),
// do not include `provideClientHydration()` here — it makes the
// client expect serialized state from the server and causes NG0505
// when there is no server render. If you add Universal later,
// add `provideClientHydration(withEventReplay())` back to client
// providers and `provideServerHydration()` on the server render.
import { withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
};
