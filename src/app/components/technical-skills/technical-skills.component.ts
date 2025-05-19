import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent {

  webTools = [
    'Angular',
    'Bootstrap',
    'CSS3',
    'GIT',
    'HTML5',
    'Javascript',
    'jQuery',
    'MySQL',
    'React JS',
    'Typescript',
    'Vue JS',
    'Woocommerce',
    'WordPress',
    'AWS'
  ]

  designTools = [
    'Photoshop',
    'Illustrator',
    'XD',
  ]

  computerTools = [
    'Microsoft 365',
    'Windows OS',
    'Mac OS',
  ]

}
