package com.lucas.model;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Entity
public class Course {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @JsonProperty("_id")
  private Long id;

  @NotBlank
  @NotNull
  @Length(min = 3, max = 100)
  @Column(length = 100, nullable = false)
  private String name;
  
  @NotNull
  @Length(min = 8)
  @Pattern(regexp = "Front-end|Back-end")
  @Column(length = 10, nullable = false)
  private String category;

}
