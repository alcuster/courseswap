import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material'; //import Angular Material 2
import { MaterializeModule } from 'angular2-materialize'; //import Angular 2 Materialize

import { DropdownModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { DetailsComponent } from './details/details.component';
import { ListingsComponent } from './listings/listings.component';
import { SubmitComponent } from './submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DetailsComponent,
    ListingsComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MaterializeModule,
    DropdownModule,
    RadioButtonModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
