package com.tanrilla.lizard.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tanrilla.lizard.model.User;

public interface UserRepository extends JpaRepository<User, Long> {


	Optional<User> findById (Long id);

	Optional<User> findByOauthUserId(Long oauthUserId);
	
}