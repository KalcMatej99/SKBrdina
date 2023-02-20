import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  language = 0;

  public change_language(language: number) : void {
    this.language = language;
  }

  constructor() { }
}
