package com.devmatheus.movies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devmatheus.movies.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
