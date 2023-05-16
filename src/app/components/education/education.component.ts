import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  colleges = [
    {
      title: 'Ingeniería en Sistemas Computacionales',
      institute: 'Universidad Virtual Del Estado de Guanajuato (UVEG)',
      startDate: '2020',
      endDate: '2023',
    },
    {
      title: 'Técnico en Diseño Gráfico',
      institute: 'Centro de Estudios Computacionales Del Valle de México',
      startDate: '2002',
      endDate: '2005',
    }
  ]

}
