import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../models/course';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-courses',
  imports: [MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'Front-end' },
    { _id: '2', name: 'React', category: 'Front-end' },
    { _id: '3', name: 'Vue', category: 'Front-end' },
    { _id: '4', name: 'Node', category: 'Back-end' },
    { _id: '5', name: 'Java', category: 'Back-end' },
  ];
  displayedColumns = ['_id', 'name', 'category'];
}
