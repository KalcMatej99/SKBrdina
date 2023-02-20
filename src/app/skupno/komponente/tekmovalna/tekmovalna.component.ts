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
  description = ['Tekmovalna dejavnost smučarskega društva Brdina je namenjena otrokom od 5 do 16 let. Tekmovalne ekipe so tri: Ekipa superbaby, Ekipa baby/miški in Ekipa Soft.', "L'attività agonistica dell'Associazione Brdina Ski è rivolta ai ragazzi dai 5 ai 16 anni. Le squadre in gara sono tre: il Superbaby Team, il Baby/Mouse Team e il Team Soft."];
  
  descriptionSuperBaby = ["Ekipa superbaby vklučuje otroke stare med 5 in 7 let. Cilj ekipe je učenje\
       tehnike smučanja in udeležba na tekme FISI in promocijske tekme.", "Il team superbaby comprende bambini di età compresa tra 5 e 7 anni. L'obiettivo della squadra è quello di imparare la tecnica dello sci e partecipare a partite FISI e partite promozionali."];
  
  titleBabyMiski = ["Baby/Miški", "Baby/Cuccioli"]
  descriptionBabyMiski= ["Ekipa Baby/Miški je sestavljena iz tekmovalcev stare med 7 in 11 letom. Cilj ekipe je vrhunsko smučanje in tekmovanje.", "Il team Baby/Cuccioli è composto da concorrenti di età compresa tra i 7 e gli 11 anni. L'obiettivo del team è lo sci e la competizione di alto livello."];
  
  descriptionSoft = ["V programu Soft se bodo otroci stari od 12. leta dalje zabavali na snegu. \
  Skupina se bo udeležila promocijskih tekem.", "Nel programma Soft, i bambini a partire dai 12 anni si divertiranno sulla neve. Il gruppo prenderà parte a gare promozionali."]


  slikeTekmovalna: string[] = []
  

  ngOnInit() {
    

    for(var i = 1; i <= 15; i++) {
      this.slikeTekmovalna.push("./../../../../assets/tekmovalna/" + i + ".jpg")
    }

    console.log(this.slikeTekmovalna)

  }
}