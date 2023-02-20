import { Component } from '@angular/core';
import { UserService } from '../../storitve/user.service';

@Component({
  selector: 'app-glavna',
  templateUrl: './glavna.component.html',
  styleUrls: ['./glavna.component.css']
})
export class GlavnaComponent {
  constructor(
    public userStoritev: UserService,
  ) {}
  imamoSlike = false;

  title = ["Smučaj z Brdino!", "Scia con il Brdina!"]
  title_buttons = [["Tečaji", "Tekmovalna dejavnost"], ["Corsi", "Agonismo"]]

  descriptionTecaji = ['Smučarksi klub Brdina organizira v sodelovanju s SPDG smučarske tečaje za  otroke stare najmanj tri leta. \
      Cilj smučarskih tečaj je smučanje v varnem okolju, zabava in igra. Brdina ponuja paket pet sobot ali pet nedelj. Tečaji se \
      odvijajo na smučarskem področju Forni di Sopra.', "Lo sci club Brdina organizza corsi di sci per bambini di almeno tre anni in collaborazione con SPDG. L'obiettivo del corso di sci è sciare in un ambiente sicuro, divertirsi e giocare. Brdina offre un pacchetto di cinque sabati o cinque domeniche. I corsi si svolgono nel comprensorio sciistico di Forni di Sopra."];

  descriptionTekmovalna = ['Tekmovalna dejavnost smučarskega društva Brdina je namenjena otrokom od 5 do 16 let. Tekmovalne ekipe so tri: Ekipa superbaby, Ekipa baby/miški in Ekipa Soft.', "L'attività agonistica dell'Associazione Brdina Ski è rivolta ai ragazzi dai 5 ai 16 anni. Le squadre in gara sono tre: il Superbaby Team, il Baby/Mouse Team e il Team Soft."];

  cardOstaleDejavnosti = ["Ostale dejavnosti", "Altre attività"]
  descriptionDejavnosti = ["Smučarski klub Brdina ni prisoten le na snegu ampak tudi v matičnem teritoriju. Vsako leto organiziramo \
  kioske, izlete in veliko več za naše člane.", "Lo Sci Club Brdina non è presente solo sulla neve ma anche sul territorio di casa. Ogni anno organizziamo chiodi, tour e molto altro per i nostri soci."]


}