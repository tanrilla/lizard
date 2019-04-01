package com.tanrilla.lizard.repository;

import com.tanrilla.lizard.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
