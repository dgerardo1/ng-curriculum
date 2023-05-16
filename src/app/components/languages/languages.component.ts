import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {

  languages = [
    {
      language: 'Español',
      level: 'Nativo',
    },
    {
      language: 'Inglés',
      level: 'Conversacional',
    }
  ]

}
