import { Component, OnInit } from '@angular/core';
import { Course } from '../course/course.model';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-listings',
  template: `
            <div class="navbar-fixed">
              <nav>
                <div class="nav-wrapper">
                  <a href="#" materialize="sideNav" data-activates="slide-out" class="button-collapse hide-on-large-only"><i class="material-icons">menu</i></a>
                  <a [routerLink]="['/listings']" class="brand-logo">&nbsp; All Trades</a>
                </div>
              </nav>
            </div>

            <app-course
              *ngFor="let i of courses"
              [course]="i">
            </app-course>

            <button [routerLink]="['/submit']" md-fab class="fab-add">
              <md-icon>add</md-icon>
            </button>

            `,
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  courses: Course[]; //initialize array of articles

  constructor(private courseService : CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.sortedCourses();
  }

}
