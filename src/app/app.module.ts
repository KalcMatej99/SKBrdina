import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './moduli/app-routing/app-routing.module';
import { NgbdModalBasic } from './skupno/komponente/modal/modal.component';
import { ModalProductComponent } from './skupno/komponente/modal-product/modal-product.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TecajiComponent } from './skupno/komponente/tecaji/tecaji.component';
import { OgrodjeComponent } from './skupno/komponente/ogrodje/ogrodje.component';
import { GlavnaComponent } from './skupno/komponente/glavna/glavna.component';
import { TekmovalnaComponent } from './skupno/komponente/tekmovalna/tekmovalna.component';
import { DejavnostiComponent } from './skupno/komponente/dejavnosti/dejavnosti.component';
import { AboutComponent } from './skupno/komponente/about/about.component'
@NgModule({
  declarations: [
    NgbdModalBasic,
    ModalProductComponent,
    TecajiComponent,
    OgrodjeComponent,
    GlavnaComponent,
    TekmovalnaComponent,
    DejavnostiComponent,
    AboutComponent
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
