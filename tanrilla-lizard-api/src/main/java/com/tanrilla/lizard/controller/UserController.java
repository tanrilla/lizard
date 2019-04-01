package com.tanrilla.lizard.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tanrilla.lizard.model.User;
import com.tanrilla.lizard.service.UserService;

@RestController
@RequestMapping(path = "/user")
public class UserController extends AbstractController {

	@Autowired
	private UserService service;

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAll() {
		return service.findAll();
	}
	
	@GetMapping(path="/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<User> getUser(@PathVariable Long id){
		return service.getUserById(id);
	}

	@GetMapping(path="/oauth/{oauthUserId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Optional<User> getUserByOauthUserId(@PathVariable Long oauthUserId){
		return service.getUserByOauthUserId(oauthUserId);
	}
}
