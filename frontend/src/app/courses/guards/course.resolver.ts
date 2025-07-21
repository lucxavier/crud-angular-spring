import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

export const courseResolver: ResolveFn<Course> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Course> => {
  const service = inject(CoursesService);
  if (route.params && route.params['id']) {
    return service.loadById(route.params['id']);
  }
  return of({ _id: '', name: '', category: '' });
};
