package com.lucas.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.lucas.model.Course;
import com.lucas.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

  private final CourseRepository courseRepository;

  @GetMapping
  public List<Course> list() {
    return courseRepository.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Course> findById(@PathVariable Long id) {
    return ResponseEntity.of(courseRepository.findById(id));
  }

  @PostMapping
  @ResponseStatus(code = HttpStatus.CREATED)
  public Course create (@RequestBody Course course){
    return courseRepository.save(course);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Course> update(@PathVariable Long id, @RequestBody Course course) {
    return ResponseEntity.of(courseRepository.findById(id)
        .map(existingCourse -> {
          existingCourse.setName(course.getName());
          existingCourse.setCategory(course.getCategory());
          return courseRepository.save(existingCourse);
        }));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
    return courseRepository.findById(id)
        .map(_ -> {
          courseRepository.deleteById(id);
          return ResponseEntity.noContent().<Void>build();
        })
        .orElse(ResponseEntity.notFound().build());
  }
}
