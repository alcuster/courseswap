import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course } from '../course/course.model';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-details',
  template: `
               <div *ngIf="course">
                 <div class="navbar-fixed">
                   <nav>
                     <div class="nav-wrapper">
                       <ul class="left">
                         <li><a [routerLink]="['/listings']"><i class="material-icons">arrow_back</i></a></li>
                         <li><a href="#!" class="brand-logo">{{ course.department }} {{ course.courseNumber }}</a><li>
                       </ul>
                     </div>
                   </nav>
                 </div>
                <div class="container">
                  <h4>{{ course.fullTitle }}</h4>
                  <h5>{{ course.days }} {{ course.time }}</h5>
                  <p>{{ course.description }}</p>
                  <button md-raised-button color="primary">CONTACT</button>
                </div>
               </div>
               `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  course: Course;
  sub: any;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.course = this.courseService.get(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
