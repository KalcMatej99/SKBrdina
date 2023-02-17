import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TecajiComponent } from './../../skupno/komponente/tecaji/tecaji.component';
import { GlavnaComponent } from './../../skupno/komponente/glavna/glavna.component';
import { TekmovalnaComponent } from './../../skupno/komponente/tekmovalna/tekmovalna.component';
import { DejavnostiComponent } from './../../skupno/komponente/dejavnosti/dejavnosti.component';
import { AboutComponent } from './../../skupno/komponente/about/about.component';

const routes: Routes = [{
  path: 'tecaji',
  component: TecajiComponent
}, {
  path: '',
  component: GlavnaComponent
}, {
  path: 'tekmovalna',
  component: TekmovalnaComponent
}, {
  path: 'dejavnosti',
  component: DejavnostiComponent
}, {
  path: 'about',
  component: AboutComponent
}];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
