package com.tanrilla.lizard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tanrilla.lizard.model.Status;

public interface StatusRepository extends JpaRepository<Status, Long> {


}