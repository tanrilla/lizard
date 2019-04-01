package com.tanrilla.lizard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
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

}
