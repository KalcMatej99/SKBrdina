import { Component } from '@angular/core';
import { UserService } from '../../storitve/user.service';

@Component({
  selector: 'app-tekmovalna',
  templateUrl: './tekmovalna.component.html',
  styleUrls: ['./tekmovalna.component.css']
})
export class TekmovalnaComponent {
  constructor(
    public userStoritev: UserService,
  ) {}


  titles = ['Tekmovalna dejavnost', "Agonismo"];
  description = ['Tekmovalna dejavnost smučarskega društva Brdina je namenjena otrokom od 5 do 16 let. \
  Tekmovalne ekipe so tri, in sicer ekipa Superbaby, ekipa Baby/Miški in ekipa Soft.', "L'attività agonistica dello sci club Brdina è rivolta ai ragazzi dai 5 ai 16 anni. Le squadre agonistiche sono tre: la squadra Superbaby, la squadra Baby/Cuccioli e la squadra Soft."];
  
  descriptionSuperBaby = ["Ekipa Superbaby vključuje otroke stare med 5 in 7 letom. \
  Cilj ekipe je učenje tehnike smučanja in udeležba na tekmah FISI in raznih promocijskih tekmah.", "La squadra Superbaby comprende bambini di età tra i 5 e i 7 anni. L'obiettivo della squadra è quello di imparare la tecnica dello sci e partecipare a gare FISI e gare promozionali."];
  
  titleBabyMiski = ["Baby/Miški", "Baby/Cuccioli"]
  descriptionBabyMiski= ["Ekipa Baby/Miški sestavljajo tekmovalci stari med 7 in 11 letom. Cilj ekipe je vrhunsko smučanje in priprava na tekmovanja na raznih mednarodnih srečanjih (tekmovanjih)", "La squadra Baby/Cuccioli è composto da concorrenti di età compresa tra i 7 e gli 11 anni. L'obiettivo della squadra è la partecipazione di competizioni di alto livello."];
  
  descriptionSoft = ["V programu Soft se bodo otroci stari od 12. leta dalje ob učenju pravilne tehnike smučanja zabavali na snegu. Skupina se bo udeležila promocijskih tekem.", "Nel programma Soft, i bambini a partire dai 12 anni si divertiranno sulla neve. Il gruppo prenderà parte a gare promozionali."]


  slikeTekmovalna: string[] = []
  

  ngOnInit() {
    

    for(var i = 1; i <= 20; i++) {
      this.slikeTekmovalna.push("./../../../../assets/tekmovalna/" + i + ".jpg")
    }

    console.log(this.slikeTekmovalna)

  }
}
