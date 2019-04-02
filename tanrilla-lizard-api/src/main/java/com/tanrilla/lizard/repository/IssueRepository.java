package com.tanrilla.lizard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tanrilla.lizard.model.Issue;

import java.util.List;
import java.util.Optional;

public interface IssueRepository extends JpaRepository<Issue, Long> {

	Optional<Issue> findById(Long id);

	@Query("select i from Issue i where i.project.id = ?1")
	List<Issue> findByProjectId(Long projectId);

}