import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses = [
    {
      title: 'Design Thinking',
      year: '2021',
      institution: 'Instituto Europero De Posgrado'
    },
    {
      title: 'jQuery Certification',
      year: '2014',
      institution: 'Telmex Hub'
    },
    {
      title: 'ITIL Foundation Examination',
      year: '2013',
      institution: 'Pink Elephant'
    },
  ]

}
