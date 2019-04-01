package com.tanrilla.lizard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tanrilla.lizard.model.Comment;
import com.tanrilla.lizard.service.CommentService;

@RestController
@RequestMapping(path = "/comment")
public class CommentController extends AbstractController{

	@Autowired
	private CommentService service;
	
	@GetMapping(path="/{issueId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Comment> getByIssue(@PathVariable Long issueId){
		return service.findByIssueId(issueId);
	}
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public Comment save(@RequestBody Comment comment){
		return service.create(comment);
	}
	
	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public Comment update(@RequestBody Comment comment){
		return service.update(comment);
	}
}
