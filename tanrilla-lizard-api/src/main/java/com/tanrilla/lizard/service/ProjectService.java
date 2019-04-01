package com.tanrilla.lizard.service;

import com.tanrilla.lizard.model.Project;

import java.util.List;

public interface ProjectService {

	List<Project> findAll();

	void create(Project project);

	void update(Project project);

	void delete(Long id);

	Project findByIdAndUserId(Long id, Long userId);

	List<Project> findAllByUserId(Long id);

}
