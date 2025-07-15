import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'Front-end' },
      { _id: '2', name: 'React', category: 'Front-end' },
      { _id: '3', name: 'Vue', category: 'Front-end' },
      { _id: '4', name: 'Node', category: 'Back-end' },
      { _id: '5', name: 'Java', category: 'Back-end' },
    ];
  }
}
