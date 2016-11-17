import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course/course.service';
import { Departments } from './departments.model';
import { Days } from './days.model';
import { Times } from './times.model';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-submit',
  template: `
            <div class="navbar-fixed">
              <nav>
                <div class="nav-wrapper">
                  <ul class="left">
                    <li><a [routerLink]="['/listings']"><i class="material-icons">arrow_back</i></a></li>
                    <li><a class="brand-logo">Submit a listing</a><li>
                  </ul>
                </div>
              </nav>
            </div>
           <div class="container" style="padding-top: 20px;">
             <md-card class="app-input-section">
               <p>Department:</p>
               <p-dropdown [options]="this.departments" [(ngModel)]="selectedDept" [style]="{'width':'50%'}"></p-dropdown>

               <md-input placeholder="Course Number:" #newnumber style="width: 100%"></md-input>

               <p-radioButton name="groupname" value="M" label="M" [(ngModel)]="selectedDays"></p-radioButton>
               <p-radioButton name="groupname" value="T" label="T" [(ngModel)]="selectedDays"></p-radioButton>
               <p-radioButton name="groupname" value="W" label="W" [(ngModel)]="selectedDays"></p-radioButton>
               <p-radioButton name="groupname" value="R" label="R" [(ngModel)]="selectedDays"></p-radioButton>
               <p-radioButton name="groupname" value="F" label="F" [(ngModel)]="selectedDays"></p-radioButton>
               <p-radioButton name="groupname" value="MWF" label="MWF" [(ngModel)]="selectedDays"></p-radioButton>
               <p-radioButton name="groupname" value="TR" label="TR" [(ngModel)]="selectedDays"></p-radioButton>

               <p>Time: </p>
               <p-dropdown [options]="this.times" [(ngModel)]="selectedTime" [style]="{'width':'50%'}"></p-dropdown>

               <md-input placeholder="Course Title (optional)" name="fulltitle" #newfulltitle style="width: 100%"></md-input>
               <md-input placeholder="Notes (optional)" name="description" #newdescription style="width: 100%"></md-input>
             </md-card>
           </div>
           <button (click)="submitListing(selectedDept, newnumber, selectedDays, selectedTime, newfulltitle, newdescription)" [routerLink]="['/listings']">Submit</button>
            `,
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private courseService : CourseService) { }

  private departments: SelectItem[] = new Departments().departments;
  private times: SelectItem[] = new Times().times;
  private days: Days = new Days();

  ngOnInit() {
  }

  submitListing(department: string, courseNumber: HTMLInputElement, days: string, time: string, fullTitle: HTMLInputElement, description: HTMLInputElement,): boolean {
    console.log(`Adding offer - dept: ${department}, days: ${days}`);
    this.courseService.submit(department, courseNumber.value, days, time, this.courseService.getSize()+1, fullTitle.value, description.value);
    courseNumber.value = '';
    fullTitle.value = '';
    description.value = '';
    return false;
  }
}
