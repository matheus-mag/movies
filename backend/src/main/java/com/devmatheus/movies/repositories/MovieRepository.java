package com.devmatheus.movies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devmatheus.movies.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

	
}
