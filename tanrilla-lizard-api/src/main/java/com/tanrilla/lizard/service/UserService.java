package com.tanrilla.lizard.service;

import java.util.List;

import com.tanrilla.lizard.model.User;

public interface UserService {

	User getUserById(Long id);

	List<User> findAll();

}