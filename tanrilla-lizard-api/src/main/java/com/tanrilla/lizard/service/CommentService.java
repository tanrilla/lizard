package com.tanrilla.lizard.service;

import java.util.List;

import com.tanrilla.lizard.model.Comment;

public interface CommentService {

	Comment create(Comment comment);

	Comment update(Comment comment);

	List<Comment> findByIssueId(Long issueId);

}