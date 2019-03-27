package com.tanrilla.lizard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tanrilla.lizard.model.User;

public interface UserRepository extends JpaRepository<User, Long> {


}