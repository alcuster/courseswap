import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course/course.component';
import { DetailsComponent } from './details/details.component';
import { ListingsComponent } from './listings/listings.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  {
    path: 'listings',
    component: ListingsComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: '',
    redirectTo: '/listings',
    pathMatch: 'full'
  },
  {
    path: 'submit',
    component: SubmitComponent
  }
];

export const routing = RouterModule.forRoot(routes);
