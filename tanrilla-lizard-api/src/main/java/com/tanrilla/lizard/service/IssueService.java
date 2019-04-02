package com.tanrilla.lizard.service;

import java.util.List;
import java.util.Optional;

import com.tanrilla.lizard.model.Issue;

public interface IssueService {

	Issue create(Issue issue);

	Issue update(Issue issue);

	Optional<Issue> findById(Long id);

	List<Issue> findAll();
	
	Issue updateByField(Long id, Issue issue);

	List<Issue> findByProjectId(Long projectId);

}