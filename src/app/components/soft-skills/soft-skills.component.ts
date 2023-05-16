import { Component } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent {

  softSkills = [
    'Autgestión',
    'Liderazgo',
    'Proactividad',
    'Resiliencia',
    'Trabajo en equipo',
  ]

}
