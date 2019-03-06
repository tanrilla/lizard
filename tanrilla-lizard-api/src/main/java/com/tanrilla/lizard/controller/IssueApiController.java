package com.tanrilla.lizard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tanrilla.lizard.model.Issue;
import com.tanrilla.lizard.service.IssueService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/issue")
public class IssueApiController {

	@Autowired
	private IssueService service;
	
	@GetMapping(path="/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Issue> getAllIssue(@PathVariable Long userId){
		return service.findAllByUserId(userId);
	}
	
	@GetMapping(path="/{userId}/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Issue getIssue(@PathVariable Long userId, @PathVariable Long id){
		return service.findByIdAndUserId(id, userId);
	}
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public void saveIssue(@RequestBody Issue payload){
		service.create(payload);
	}
	
	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateIssue(@RequestBody Issue payload){
		service.update(payload);
	}
	
	@DeleteMapping(path="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public void deleteIssue(@PathVariable Long id){
		service.delete(id);
	}
	
	
}