import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/course';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CategoryPipe } from '../../../shared/pipes/category.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-courses-list',
  imports: [MatTableModule, MatIconModule, CategoryPipe, MatButtonModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['_id', 'name', 'category', 'actions'];

  constructor() {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(element: Course) {
    this.edit.emit(element);
  }

  onDelete(element: Course) {
    this.delete.emit(element);
  }
}
