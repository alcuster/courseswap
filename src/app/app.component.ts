import { Component } from '@angular/core';
import { CourseService } from './course/course.service';
import { Course } from './course/course.model';

@Component({
  selector: 'app-root',
  template: `
            <header>
              <ul id="slide-out" class="side-nav fixed">
                <h4 class="center-align">CourseSwap</h4>
                <li class="active"><a [routerLink]="['/listings']">All Trades</a></li>
                <li><a href="#!">Settings</a></li>
                <li><a href="#!">Profile</a></li>
                <li><a href="#!">My Trades</a></li>
              </ul>
            </header>
            <main>
              <div class="col s12 m9 110">
                <router-outlet></router-outlet>
              </div>
            </main>
            `,
  styleUrls: ['./app.component.css'],
  providers: [CourseService]
})
export class AppComponent {

}
