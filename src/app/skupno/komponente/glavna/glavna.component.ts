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

  descriptionTecaji = ['Smučarksi klub Brdina organizira v sodelovanju s SPDG smučarske tečaje za  otroke stare najmanj štiri leta. \
  Cilj smučarskih tečajev je pravilno smučanje v varnem okolju, najmlajšim otrokom približati smučanje in hkrati izkoristiti čas za aktiven družinski izlet. \
  Brdina ponuja paket petih sobot ali petih nedelj. Tečaji se odvijajo na smučarskem področju Forni di Sopra. Poleg smučarskega znanja nudimo zabavo in igro na snegu.', "Lo sci club Brdina organizza corsi di sci per bambini di almeno tre anni in collaborazione con SPDG. L'obiettivo del corso di sci è sciare in un ambiente sicuro, divertirsi e giocare. Brdina offre un pacchetto di cinque sabati o cinque domeniche. I corsi si svolgono nel comprensorio sciistico di Forni di Sopra."];

  descriptionTekmovalna = ['Tekmovalna dejavnost smučarskega društva Brdina je namenjena otrokom od 5 do 16 let. \
  Tekmovalne ekipe so tri, in sicer ekipa Superbaby, ekipa Baby/Miški in ekipa Soft.', "L'attività agonistica dello sci club Brdina è rivolta ai ragazzi dai 5 ai 16 anni. Le squadre agonistiche sono tre: la squadra Superbaby, la squadra Baby/Cuccioli e la squadra Soft."];

  cardOstaleDejavnosti = ["Ostale dejavnosti", "Altre attività"]
  descriptionDejavnosti = ["Smučarski klub Brdina ni prisoten le na snegu, ampak tudi na matičnem teritoriju. Vsako leto društvo organizira kioske na raznih prireditvah, izlete za člane in simpatizerje in še veliko več za naše člane.", "Lo Sci Club Brdina non è presente solo sulla neve ma anche sul territorio di casa. Ogni anno organizziamo chiodi, tour e molto altro per i nostri soci."]


}
