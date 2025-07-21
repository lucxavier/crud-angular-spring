import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first()
      //delay(5000),
      //tap((courses) => console.log(courses))
    );
  }

  save(record: Partial<Course>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  create(record: Partial<Course>) {
    return this.httpClient.post(this.API, record).pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`).pipe(first());
  }

  private update(record: Partial<Course>) {
    return this.httpClient
      .put(`${this.API}/${record._id}`, record)
      .pipe(first());
  }
}
