package com.tanrilla.lizard.service;

import java.util.List;
import java.util.Optional;

import com.tanrilla.lizard.model.User;

public interface UserService {

	Optional<User> getUserById(Long id);

	List<User> findAll();

	Optional<User> getUserByOauthUserId(Long oauthUserId);

}