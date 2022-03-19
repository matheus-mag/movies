package com.devmatheus.movies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devmatheus.movies.entities.Score;
import com.devmatheus.movies.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

	
}
