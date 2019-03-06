package com.tanrilla.lizard.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.tanrilla.lizard.model.Issue;

public interface IssueRepository extends CrudRepository<Issue, Long> {

	List<Issue> findAllByUserId(Long id);

	Issue findByIdAndUserId(Long id, Long userId);

}