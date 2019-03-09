package com.tanrilla.lizard.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import com.tanrilla.lizard.model.Issue;
import com.tanrilla.lizard.service.IssueService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/issue")
public class IssueController {

	@Autowired
	private IssueService service;
	
	@GetMapping(path="/getAll", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Issue> getAllIssues(){
		return service.findAll();
	}

	@GetMapping(path="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<Issue> getIssue(@PathVariable Long id){
		return service.findById(id);
	}
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public Issue saveIssue(@RequestBody Issue issue){
		return service.create(issue);
	}
	
	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public Issue updateIssue(@RequestBody Issue issue){
		return service.update(issue);
	}
	
}