import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  jobs = [
    {
      title: 'Especialista De Desarrollo IT Sr',
      company: 'Audi México',
      sector: 'Automotriz',
      modality: 'Híbrido',
      startDate: 'Nov. 2023',
      endDate: 'Actualidad',
      activities: [
                    'Transformo necesidades en soluciones técnicas liderando el levantamiento de requerimientos.',
                    'Superviso y apruebo documentación para garantizar calidad y cumplimiento.',
                    'Aseguro la correcta implementación del desarrollo, alineado a los objetivos del proyecto.',
                    'Guío al equipo con metodologías y tecnologías actuales para optimizar resultados.',
                    'Analizo y superviso temas de soporte técnico para garantizar eficiencia.',
                    'Coordino mantenimiento y actualizaciones para estabilidad y mejora continua.',
                    'Establezco niveles de responsabilidad para una estructura clara y efectiva.',
                    'Elaboro propuestas técnicas y económicas alineadas con objetivos estratégicos.',
                    'Gestiono proveedores de desarrollo para optimizar colaboración y eficiencia.'
                  ]
    },
    {
      title: 'Front-end Developer',
      company: 'Smart Plus',
      sector: 'Fintech',
      modality: 'Remoto',
      startDate: 'Dic. 2020',
      endDate: 'Mar. 2023',
      activities: [
                    'Gestioné las actividades del equipo de front-end, asegurando eficiencia y calidad en los entregables.',
                    'Desarrollé interfaces web interactivas y optimizadas para mejorar la experiencia del usuario.',
                    'Maqueté interfaces de usuario, aplicando principios de accesibilidad y diseño responsivo.',
                    'Analicé y diseñé productos digitales con enfoque UX/UI, mejorando la usabilidad y funcionalidad.',
                    'Mantuve y actualicé sitios y aplicaciones web, garantizando estabilidad y mejoras continuas.'
                  ]
    },
    {
      title: 'Diseñador UX|UI y Front-end Developer',
      company: 'MyCaribu',
      sector: 'Insurtech',
      modality: 'Remoto',
      startDate: 'Ene. 2020',
      endDate: 'Dic. 2020',
      activities: [
                    'Diseñé y optimicé interfaces de usuario para aplicaciones móviles, mejorando usabilidad y accesibilidad.',
                    'Analicé y estructuré el sitio web, asegurando una experiencia intuitiva y funcional.',
                    'Maqueté interfaces web con un enfoque responsivo y adaptado a estándares de diseño.',
                    'Mantuve y actualicé el sitio web, garantizando estabilidad y mejoras continuas.'
                  ]
    },
    {
      title: 'Webmaster',
      company: 'Edicomm',
      sector: 'Editorial',
      modality: 'Remoto',
      startDate: 'May. 2016',
      endDate: 'Mar. 2019',
      activities: [
                    'Diseñé y desarrollé sitios web, asegurando funcionalidad y experiencia óptima.',
                    'Creé y gestioné contenido digital para web y redes sociales, optimizando alcance.',
                    'Administré actividades y recursos del área, optimizando procesos y eficiencia.',
                    'Mantuve y actualicé sitios web, garantizando estabilidad y mejoras continuas.',
                    'Coordiné la gestión de proveedores, asegurando calidad y cumplimiento de servicios.'
                  ]
    },
    {
      title: 'Analista de Sistemas Sr',
      company: 'Adecco México',
      sector: 'Recursos Humanos',
      modality: 'Presencial',
      startDate: 'May. 2008',
      endDate: 'May. 2016',
      activities: [
                    'Dirigí el proyecto de intranet para Adecco México, asegurando su implementación eficiente.',
                    'Lideré el desarrollo de la intranet Adecco LATAM, optimizando la gestión interna.',
                    'Coordiné el proyecto de sitio web en 2009, garantizando su diseño y funcionalidad.',
                    'Supervisé y mantuve sitios y aplicaciones web, asegurando estabilidad y mejoras constantes.',
                    'Diseñé y optimicé productos web con enfoque UX/UI, mejorando la experiencia del usuario.'
                  ]
    }
  ]

}
