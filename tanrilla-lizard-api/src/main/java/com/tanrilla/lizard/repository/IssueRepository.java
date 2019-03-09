package com.tanrilla.lizard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tanrilla.lizard.model.Issue;

import java.util.Optional;

public interface IssueRepository extends JpaRepository<Issue, Long> {

	Optional<Issue> findById(Long id);

}