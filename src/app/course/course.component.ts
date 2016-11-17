import { Component, OnInit, Input } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-course',
  template: `
            <div class="card horizontal">
              <div class="card-image">
                <img src="../../assets/images/placeholder.png">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <span class="card-title">{{ course.department }} {{ course.courseNumber }}</span>
                  <p>{{ course.days }} {{ course.time }}</p>
                </div>
                <div class="card-action">
                  <a href="#" [routerLink]="['/details', course.id]">Info</a>
                </div>
              </div>
            </div>
            `,
  styleUrls: ['./course.component.css'],
  host: {
    class: 'row'
  }
})
export class CourseComponent implements OnInit {
  @Input() course: Course;

  ngOnInit() {
  }

}
