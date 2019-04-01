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
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private StatusService statusService;

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

	@Override
	public Issue updateByField(Long id, Issue issue) {
		Issue issuePrev = repository.getOne(id);
		if (null != issue) {
			if (null != issue.getStatus() && null != issue.getStatus().getId()) {				
				issuePrev.setStatus(statusService.getStatusById(issue.getStatus().getId()));
			}
			if (null != issue.getAssignee() && null != issue.getAssignee().getId()) {
				issuePrev.setAssignee(userService.getUserById(issue.getAssignee().getId()).get());
			}			
		}
		
		return repository.save(issuePrev);
	}

}

