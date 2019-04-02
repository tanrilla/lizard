package com.tanrilla.lizard.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tanrilla.lizard.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
	
	List<Project> findAllByCreatedBy(Long createdBy);

	Project findByIdAndCreatedBy(Long id, Long createdBy);
}
