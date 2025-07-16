import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../models/course';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesService } from '../services/courses.service';
import { catchError, Observable, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    AsyncPipe,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['_id', 'name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  ngOnInit(): void {}
}
