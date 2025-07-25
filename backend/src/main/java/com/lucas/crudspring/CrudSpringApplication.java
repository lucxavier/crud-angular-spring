package com.lucas.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.lucas.model.Course;
import com.lucas.repository.CourseRepository;

@SpringBootApplication
@ComponentScan(basePackages = {"com.lucas.controller", "com.lucas.repository"})
@EnableJpaRepositories(basePackages = "com.lucas.repository")
@EntityScan(basePackages = "com.lucas.model")
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository){
		return args -> {
			courseRepository.deleteAll();
			
			Course c = new Course();
			c.setName("Angular");
			c.setCategory("Front-end");

			courseRepository.save(c);
		};
	}
}
