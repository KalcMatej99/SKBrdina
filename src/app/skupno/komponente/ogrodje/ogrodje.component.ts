import { PovezavaService } from '../../storitve/povezava.service';
import { UserService } from '../../storitve/user.service';
import { Router } from '@angular/router';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ogrodje',
  templateUrl: './ogrodje.component.html',
  styleUrls: ['./ogrodje.component.css'],
})
export class OgrodjeComponent {
  constructor(
    private povezavaStoritev: PovezavaService,
    public userStoritev: UserService,
  ) {}

  title = 'skbrdina';
  title_start_message = "AŠD SK Brdina"


  language = 0
  language_texts = ["SLO 🇸🇮", "ITA 🇮🇹", "ENG 🇺🇸", "DE 🇩🇪"]

  description_button = ["Opis", "Info", "Info", "Info"]

  contact_title = ["Kontakt", "Contatto", "Contact", "Kontakt"]

  location_title = ["Kje smo?", "Dove siamo?", "Where are we?", "Wo sind wir?"]
  location = ["Obelisk, Opčine", "Obelisco, Opicina", "Repen, n. 20", "Repen, N. 20"]

  social_title = ["Socialna omrežja", "Reti Sociali", "Social Networks", "Soziale Netzwerke"]

  opensource_title = ["Stran je odprtokodna", "Il sito è open source", "Site is open source", "Die Website ist Open Source"]

  @ViewChild('toggler') navbarToggler!: ElementRef;

  public change_language = (index_language: number): void => {
    this.navbarToggler!.nativeElement.click()
    this.userStoritev.change_language(index_language)
  }

  public close_navbar = (): void => {
    this.navbarToggler!.nativeElement.click()
  }


  public jePovezava(): boolean {
    return this.povezavaStoritev.jePovezava;
  }

  public showAlert(): void {
    alert("Safe guarding. Responsabile: Tatjana čač. Email: info@brdina.org. Telefono: +39 342 073 0513");
  }

}
