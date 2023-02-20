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

  description = ["Smučarski klub Brdina ni prisoten le na snegu ampak tudi v matičnem teritoriju. Vsako leto organiziramo \
  kioske, izlete in veliko več za naše člane.", "Lo Sci Club Brdina non è presente solo sulla neve ma anche sul territorio di casa. Ogni anno organizziamo chiodi, tour e molto altro per i nostri soci."]

  dejavnosti: any[] = [{
    "image": "./../../../../assets/pust.jpg",
    "title": ["Kraški pust", "Carnevale carsico"],
    "description": ["Že nešteto let organiziramo kiosk za kraški pust.", "Da innumerevoli anni organizziamo un chiosco per il carnevale carsico."]
  }, {
    "image": "./../../../../assets/kraska_ohcet.jpg",
    "title": ["Kraška Ohcet", "Nozze carsiche"],
    "description": ["Ob vsaki izvedbi kraške ohceti organiziramo kiosk v Repnu, ki je odprt čez celo izvajanje Kraške Ohceti. Naše goste postrežimo s bogato ponudbo kraških tradicionalih pijač in jedač.", "Ogni volta che eseguiamo l'ohceta carsico, organizziamo un chiosco a Repno, che è aperto durante tutta la realizzazione di kraška Ohceti. I nostri ospiti sono serviti con una vasta gamma di bevande e cibi tradizionali carsici."]
  }, {
    "image": "./../../../../assets/barkolana.jpg",
    "title": ["Barkolana", "Barcolana"],
    "description": ["Na Opčinah pri Obelisku organiziramo kiosk.", "All'obelisco di Opicina organizziamo un chiosco."]
  }];
}
