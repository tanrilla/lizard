package com.tanrilla.lizard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tanrilla.lizard.model.Project;
import com.tanrilla.lizard.service.ProjectService;

@RestController
@RequestMapping(path = "/project")
public class ProjectController extends AbstractController {

    @Autowired
    private ProjectService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Project> getAll(){
        return service.findAll();
    }
    
	@GetMapping(path="/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Project> getAllProject(@PathVariable Long userId){
		return service.findAllByUserId(userId);
	}
    
	@GetMapping(path="/{userId}/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Project getProject(@PathVariable Long userId, @PathVariable Long id){
		return service.findByIdAndUserId(id, userId);
	}
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public void saveProject(@RequestBody Project project){
		service.create(project);
	}
	
	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public void updateProject(@RequestBody Project project){
		service.update(project);
	}
	
	@DeleteMapping(path="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public void deleteProject(@PathVariable Long id){
		service.delete(id);
	}

}
