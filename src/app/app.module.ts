import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './moduli/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NgbdModalBasic } from './skupno/komponente/modal/modal.component';
import { ModalProductComponent } from './skupno/komponente/modal-product/modal-product.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TecajiComponent } from './skupno/komponente/tecaji/tecaji.component';
import { OgrodjeComponent } from './skupno/komponente/ogrodje/ogrodje.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdModalBasic,
    ModalProductComponent,
    TecajiComponent,
    OgrodjeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }
