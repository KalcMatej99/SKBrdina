import { Component, OnInit } from '@angular/core';
import { UserService } from '../../storitve/user.service';


@Component({
  selector: 'app-tecaji',
  templateUrl: './tecaji.component.html',
  styleUrls: ['./tecaji.component.css']
})
export class TecajiComponent implements OnInit {
  constructor(
    public userStoritev: UserService,
  ) {}


  titles = ['Smučarski tečaji', "Corsi di sci"];
  description = ["Smučarksi klub Brdina organizira v sodelovanju s SPDG smučarske tečaje za  otroke stare najmanj štiri leta. \
    Cilj smučarskih tečajev je pravilno smučanje v varnem okolju, najmlajšim otrokom približati smučanje in hkrati izkoristiti čas za aktiven družinski izlet. \
    Brdina ponuja paket petih sobot ali petih nedelj. Tečaji se odvijajo na smučarskem področju Forni di Sopra. Poleg smučarskega znanja nudimo zabavo in igro na snegu.", "Lo sci club Brdina organizza corsi di sci per bambini di almeno tre anni in collaborazione con SPDG. L'obiettivo del corso di sci è sciare in un ambiente sicuro, divertirsi e giocare. Brdina offre un pacchetto di cinque sabati o cinque domeniche. I corsi si svolgono nel comprensorio sciistico di Forni di Sopra."];

  slikeTecaji: string[] = []
  
  ngOnInit() {
    
    for(var i = 1; i <= 17; i++) {
      this.slikeTecaji.push("./../../../../assets/tecaji/" + i + ".jpg")
    }

    console.log(this.slikeTecaji)

  }

  
}
