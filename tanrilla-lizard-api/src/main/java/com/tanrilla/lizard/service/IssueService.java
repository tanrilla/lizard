package com.tanrilla.lizard.service;

import java.util.List;

import com.tanrilla.lizard.model.Issue;

public interface IssueService {

	void create(Issue objToSave);

	void update(Issue objToUpdate);

	void delete(Long id);

	Issue findByIdAndUserId(Long id, Long userId);

	List<Issue> findAllByUserId(Long id);

}