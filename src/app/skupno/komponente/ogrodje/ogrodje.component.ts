import { Component, OnInit } from '@angular/core';
import { PovezavaService } from '../../storitve/povezava.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ogrodje',
  templateUrl: './ogrodje.component.html',
  styleUrls: ['./ogrodje.component.css'],
})
export class OgrodjeComponent implements OnInit {
  constructor(
    private povezavaStoritev: PovezavaService,
    private router: Router,
  ) {}

  title = 'skbrdina';
  title_start_message = "SK Brdina"
  subtitles_start_message = ["SMUČAJ Z BRDINO!", "SCIA COL BRDINA!", "SKI WITH BRDINA!", "SKI MIT BRDINA!"]
  button_start_message = ["Ogled cenika", "Mostra menu", "Show the menu", "Menü anzeigen"]

  titles = ['Barcolana 2022', "Barcolana 2022", "Barcolana 2022", "Barcolana 2022"];

  language = 0
  language_texts = ["SLO 🇸🇮", "ITA 🇮🇹", "ENG 🇺🇸", "DE 🇩🇪"]

  description_button = ["Opis", "Info", "Info", "Info"]

  location_title = ["Kje smo?", "Dove siamo?", "Where are we?", "Wo sind wir?"]
  location = ["Obelisk, Opčine", "Obelisco, Opicina", "Repen, n. 20", "Repen, N. 20"]

  social_title = ["Socialna omrežja", "Reti Sociali", "Social Networks", "Soziale Netzwerke"]

  opensource_title = ["Stran je odprtokodna", "Il sito è open source", "Site is open source", "Die Website ist Open Source"]

  @ViewChild('toggler') navbarToggler!: ElementRef;

  public change_language = (index_language: number): void => {
    this.language = index_language;
    this.navbarToggler!.nativeElement.click()
    this.openModal();
  }

  @ViewChild('modal') public modalComponent!: NgbdModalBasic;
  async openModal() {
    return await this.modalComponent.open();
  }

  ngAfterViewInit(): void {
    this.openModal();
  }

  public jePovezava(): boolean {
    return this.povezavaStoritev.jePovezava;
  }

}
