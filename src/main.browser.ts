/**
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
    enableProdMode();
}

// bootstrap (Just-In-Time compiling)
platformBrowserDynamic().bootstrapModule(AppModule, []).
    catch((err: any) => console.error(err));
