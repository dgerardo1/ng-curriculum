import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  jobs = [
    {
      title: 'Frontend Developer',
      company: 'Smart Plus',
      modality: 'Remoto',
      startDate: 'Dic. 2020',
      endDate: 'Mar. 2023',
      activities: [
        'Gestioné las actividades del equipo de frot end.',
        'Realicé desarrollo web front end.',
        'Maqueté interfaces de usuario web.',
        'Analicé y diseñé productos web (UX/UI).',
        'Realicé mantenimiento y actualización de sitios y aplicaciones web.',
      ]
    },
    {
      title: 'UX UI Designer & Developer',
      company: 'MyCaribu',
      modality: 'Remoto',
      startDate: 'Ene. 2020',
      endDate: 'Dic. 2020',
      activities: [
        'Analicé y diseñé interfaces de usuario móvil.',
        'Analicé y diseñé el sitio web.',
        'Maqueté la interfaz de usuario para la web.',
        'Realicé mantenimiento y actualización del sitio web.',
      ]
    },
    {
      title: 'Webmaster',
      company: 'Edicomm',
      modality: 'Remoto',
      startDate: 'May. 2016',
      endDate: 'Mar. 2019',
      activities: [
        'Diseñé y desarrollé de sitios web.',
        'Diseñé y gestioné contenido para web y redes sociales.',
        'Gestioné las actividades y recursos del área (humanos y económicos).',
        'Realicé mantenimiento y actualización de sitios web.',
        'Me encargué de la gestión de proveedores.',
      ]
    },
    {
      title: 'Analista de Sistemas Sr',
      company: 'Adecco México',
      modality: 'Presencial',
      startDate: 'May. 2008',
      endDate: 'May. 2016',
      activities: [
        'Lideré el proyecto intranet Adecco México.',
        'Lideré el proyecto intranet Adecco LATAM.',
        'Lideré el proyecto de Sitio Web en 2009.',
        'Realicé supervisión y mantenimiento de sitios y aplicaciones web.',
        'Analicé y diseñé productos web (UX/UI).',
      ]
    }
  ]

}
