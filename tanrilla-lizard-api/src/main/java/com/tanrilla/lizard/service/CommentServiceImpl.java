package com.tanrilla.lizard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tanrilla.lizard.model.Comment;
import com.tanrilla.lizard.repository.CommentRepository;

@Service
public class CommentServiceImpl implements CommentService {

	
	@Autowired
	private CommentRepository repository;

	@Override
	public Comment create(Comment comment){
		return repository.save(comment);
	}

	@Override
	public Comment update(Comment comment){
		return repository.save(comment);
	}

	@Override
	public List<Comment> findByIssueId(Long issueId) {
		return repository.findByIssueId(issueId);
	}

}
