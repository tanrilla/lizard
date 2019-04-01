package com.tanrilla.lizard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tanrilla.lizard.model.Status;
import com.tanrilla.lizard.service.StatusService;

@RestController
@RequestMapping(path = "/status")
public class StatusController extends AbstractController {

	@Autowired
	private StatusService service;
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Status> getAll(){
		return service.findAll();
	}
	
}
