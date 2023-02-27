import { Component } from '@angular/core';
import { UserService } from '../../storitve/user.service';

@Component({
  selector: 'app-dejavnosti',
  templateUrl: './dejavnosti.component.html',
  styleUrls: ['./dejavnosti.component.css']
})
export class DejavnostiComponent {
  constructor(
    public userStoritev: UserService,
  ) {}

  description = ["Smučarski klub Brdina ni prisoten le na snegu, ampak tudi na matičnem teritoriju. Vsako leto društvo organizira kioske na raznih prireditvah, izlete za člane in simpatizerje in še veliko več za naše člane.", "Lo Sci Club Brdina non è presente solo sulla neve ma anche sul territorio di casa. Ogni anno organizziamo chioschi, escursioni e molto altro per i nostri soci."]

  dejavnosti: any[] = [{
    "image": "./../../../../assets/pust.jpg",
    "title": ["Kraški pust", "Carnevale carsico"],
    "description": ["Že nešteto let sodelujemo s samostojnim kioskom v borjaču Prosvetnega doma, kjer ponujamo  zelje, klobase in joto, ki jih okusno pripravijo odbornice našega društva.", "Da innumerevoli anni organizziamo un chiosco per il carnevale carsico."]
  }, {
    "image": "./../../../../assets/kraska_ohcet.jpg",
    "title": ["Kraška Ohcet", "Nozze carsiche"],
    "description": ["Ob vsaki izvedbi Kraške ohceti organiziramo kiosk v Repnu, ki je odprt čez celo izvajanje Kraške ohceti. Naše goste postrežemo z bogato ponudbo tradicionalih kraških pijač in jedač.", "Per ogni edizione delle nozze carsiche organizziamo un chiosco a Rupingrande, che è aperto durante tutta la realizzazione delle nozze carsiche. I nostri ospiti sono serviti con una vasta gamma di bevande e cibi tradizionali carsici."]
  }, {
    "image": "./../../../../assets/barkolana.jpg",
    "title": ["Barkolana", "Barcolana"],
    "description": ["Na trgu pred obeliskom na Opčinah je ob priložnosti Barkolane postavljen kiost z gastronomskimi specialitetami.", "All'obelisco di Opicina organizziamo un chiosco."]
  }];
}
