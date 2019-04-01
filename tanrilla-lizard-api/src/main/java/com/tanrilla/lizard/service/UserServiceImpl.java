package com.tanrilla.lizard.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tanrilla.lizard.model.User;
import com.tanrilla.lizard.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;

	@Override
	public Optional<User> getUserById(Long id) {
		return repository.findById(id);
	}

	@Override
	public List<User> findAll() {
		return repository.findAll();
	}

	@Override
	public Optional<User> getUserByOauthUserId(Long oauthUserId) {
		return repository.findByOauthUserId(oauthUserId);
	}

}
