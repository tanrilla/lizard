package com.tanrilla.lizard.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tanrilla.lizard.model.Issue;
import com.tanrilla.lizard.repository.IssueRepository;

@Service
public class IssueServiceImpl implements IssueService {

	@Autowired
	private IssueRepository repository;

	@Override
	public Issue create(Issue issue){
		return repository.save(issue);
	}

	@Override
	public Issue update(Issue issue){
		return repository.save(issue);
	}

	@Override
	public Optional<Issue> findById(Long id) {
		return repository.findById(id);
	}

	@Override
	public List<Issue> findAll(){
		return repository.findAll();
	}

}

