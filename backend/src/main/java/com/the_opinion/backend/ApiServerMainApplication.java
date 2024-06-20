package com.the_opinion.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.the_opinion.backend.db.dao")
@EntityScan(basePackages = "com.the_opinion.backend.db.entity")
@ComponentScan(basePackages = "com.the_opinion.backend")
public class ApiServerMainApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiServerMainApplication.class, args);
	}

}
