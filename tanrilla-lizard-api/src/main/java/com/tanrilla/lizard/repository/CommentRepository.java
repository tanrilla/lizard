package com.tanrilla.lizard.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tanrilla.lizard.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

	List<Comment> findByIssueId(Long issueId);
}